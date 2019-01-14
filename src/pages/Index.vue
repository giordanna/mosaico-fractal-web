<template>
  <q-page padding class="row justify-center">
    <div class="col-lg-6 col-sm-9 col-xs-10">

      <h2 class="text-weight-thin flex flex-center">Mosaico <span class="text-weight-bolder">Fractal</span></h2>
      <p class="text-weight-regular flex flex-center">Crie imagens artísticas com a versão web da ferramenta Mosaico Fractal</p>
      <blockquote>
        <p>O programa preenche um espaço utilizando estampas e utiliza a função zeta de Hurwitz para controlar suas áreas, assim permitindo que estas estampas sejam inseridas no espaço e por fim apresentando um resultado que se assemelha a um fractal geométrico, sendo também esteticamente agradável.</p>
        <small>Caso tenha interesse no estudo feito acerca desta técnica, acesse este <cite><a href="statics/2017degregoriisintroducao.pdf">Trabalho de Conclusão de Curso</a></cite>.</small>
      </blockquote>

      <div class="q-pt-xl">
        <q-field
          icon="dashboard"
          label="Estampa para preenchimento de espaço"
        >
        </q-field>
      </div>

      <div class="card-examples row items-center flex flex-center">
        <q-card inline class="q-ma-sm" style="cursor:pointer">
          <q-card-media overlay-position="top">
            <img :src="'statics/fundos/' + listaEstampas[paginaEstampa-1]['short'] + '.svg'">

            <q-card-title slot="overlay">
              <div slot="subtitle" class="text-right">{{ listaEstampas[paginaEstampa-1]['nome'] }}</div>
            </q-card-title>
          </q-card-media>
        </q-card>
      </div>

      <q-pagination
        class="justify-center"
        input
        v-model="paginaEstampa"
        :min="1"
        :max="listaEstampas.length"
      />

      <div class="q-pt-lg">
        <q-field
          icon="gradient"
          label="Forma do fundo"
        >
        </q-field>
      </div>

      <div class="card-examples row items-center flex flex-center">
        <q-card inline class="q-ma-sm"  style="cursor:pointer">
          <q-card-media overlay-position="top">
            <img :src="'statics/fundos/' + listaFundos[paginaFundo-1]['short'] + '.svg'">

            <q-card-title slot="overlay">
              <div slot="subtitle" class="text-right">{{ listaFundos[paginaFundo-1]['nome'] }}</div>
            </q-card-title>
          </q-card-media>
        </q-card>
      </div>

      <q-pagination
        class="justify-center"
        input
        v-model="paginaFundo"
        :min="1"
        :max="listaFundos.length"
      />

      <div class="q-pt-xl">
        <q-field
          icon="filter"
          label="Estampas a serem inseridas  (no máximo)"
        >
          <q-input type="number" v-model="numeroEstampas" min="10" max="1000">

          </q-input>
        </q-field>
      </div>

      <div class="q-pt-xl">
        <q-field
          icon="color_lens"
          label="Cor base das estampas"
        >
          <q-color v-model="corBase" float-label="Clique aqui para escolher sua cor"/>
        </q-field>

        <q-field
          icon="color_lens"
          label="Cor do fundo de preenchimento"
        >
          <q-color v-model="corFundo" float-label="Clique aqui para escolher sua cor"/>
        </q-field>

        <q-field
          icon="color_lens"
          label="Cor do fundo do quadro (se tiver)"
        >
          <q-color v-model="corQuadro" float-label="Clique aqui para escolher sua cor"/>
        </q-field>
      </div>

      <div class="q-pt-xl">
        <q-btn @click="criarMosaico" color="dark" class="full-width" label="Clique para iniciar" />
      </div>

      <div class="q-pt-xl">
        <div id="painelPrincipal"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import * as d3 from 'd3'
import * as pointInSvgPolygon from 'point-in-svg-polygon'

export default {
  name: 'PageIndex',
  data () {
    return {
      listaEstampas: [{'nome': '', 'short': ''}],
      paginaEstampa: 1,
      listaFundos: [{'nome': '', 'short': ''}],
      paginaFundo: 1,
      estampaPreenchimento: '',
      formaFundo: '',
      numeroEstampas: 200,
      corBase: '#000000',
      corFundo: '#ffffff',
      corQuadro: '#ffffff'
    }
  },
  mounted () {
    this.getEstampas()
    this.getFundos()
  },
  methods: {
    getEstampas () {
      this.$axios.get('https://mosaico-fractal.firebaseio.com/estampas.json')
        .then((res) => {
          this.listaEstampas = res.data
        })
        .catch(error => console.error(error))
    },
    getFundos () {
      this.$axios.get('https://mosaico-fractal.firebaseio.com/fundos.json')
        .then((res) => {
          this.listaFundos = res.data
        })
        .catch(error => console.error(error))
    },
    pathParaArray (path, samples = 100) {
      const tamanho = path.getTotalLength(),
        passo = tamanho / samples

      let pontos = [],
        ponto = null

      for (let i = 0; i < tamanho; i += passo) {
        ponto = path.getPointAtLength(i)
        pontos.push([ponto.x, ponto.y])
      }
      return pontos
    },
    criarMosaico () {
      let numeroEstampas = 0
      const MAXITERACOES = 100,
        MAXESTAMPAS = this.numeroEstampas

      // pega a estampa
      this.extraiEstampaEFundo().then((estampa) => {
        // declara variáveis que serão utilizadas para o preenchimento
        let constante = 1 + this.listaFundos[this.paginaFundo - 1]['c'] + this.listaEstampas[this.paginaEstampa - 1]['c'],
          razaoDaArea,
          expoente,
          N = this.listaFundos[this.paginaFundo - 1]['N'] + this.listaEstampas[this.paginaEstampa - 1]['N'],
          escala,
          passou = false

        // ajeita um pouco a constante
        if (this.listaFundos[this.paginaFundo - 1]['short'] === 'triangulosierpinski' &&
          this.listaEstampas[this.paginaEstampa - 1]['short'] === 'quadrado') {
          constante += 0.05
        }
        // calcula valores a serem utilizados nesta execução: razão e expoente
        razaoDaArea = 1.0 / this.funcaoZeta(constante, N)
        expoente = 0.5 * constante

        do {
          if (numeroEstampas >= MAXESTAMPAS) break
          escala = razaoDaArea * this.valorControle(N, expoente)

          passou = this.tentarInserirEstampa(estampa, escala, MAXITERACOES)
          if (passou) {
            N++
            numeroEstampas++
          } else {
            break
          }
        } while (numeroEstampas < MAXESTAMPAS)
      })
    },
    extraiEstampaEFundo () {
      let painelPrincipal = document.getElementById('painelPrincipal')
      painelPrincipal.innerHTML = ''
      painelPrincipal = d3.select('#painelPrincipal').append('svg')
        .attr('id', 'svgPrincipal')
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 100 100')
        .attr('width', '100%')
        .attr('height', '100%')

      painelPrincipal.append('rect')
        .attr('x', '0')
        .attr('y', '0')
        .attr('width', '100')
        .attr('height', '100')
        .style('fill', this.corQuadro)

      // pega os paths do fundo
      d3.xml('statics/fundos/' + this.listaFundos[this.paginaFundo - 1]['short'] + '.svg')
        .then(data => {
          let pathsFundo = Array.prototype.slice.call(data.documentElement.getElementsByTagName('path'))
          let grupoBG = painelPrincipal.append('g').attr('id', 'svgBackground')
          pathsFundo.map((path) => {
            const corDoFundo = path.getAttribute('class') === 'base' ? this.corFundo : this.corQuadro
            grupoBG.append('path')
              .attr('class', path.getAttribute('class'))
              .attr('d', path.getAttribute('d'))
              .style('fill', corDoFundo)
          })
        })

      // envia a path da estampa
      return d3.xml('statics/fundos/' + this.listaEstampas[this.paginaEstampa - 1]['short'] + '.svg')
        .then(data => {
          return Array.prototype.slice.call(data.documentElement.getElementsByTagName('path'))[0]
        })
    },
    tentarInserirEstampa (pathEstampa, escala, MAXITERACOES) {
      let iteracoes = 0,
        isInserido = false
      do {
        if (iteracoes >= MAXITERACOES) break
        d3.select('#svgPrincipal').append('path')
          .attr('id', 'svgTeste')
          .attr('d', pathEstampa.getAttribute('d'))
          .style('fill', this.corBase)
          .attr('transform',
            'rotate(' + Math.random() * 360 + ')' +
            'translate(' + Math.random() * (100 * (1 - escala)) + ',' + Math.random() * (100 * (1 - escala)) + ')' +
            'scale(' + escala + ')'
          )
        this.$flatten(document.getElementById('svgTeste'), true)
        const resultado = this.estampaEstaDentro(document.getElementById('svgTeste'),
          document.getElementById('svgBackground'),
          Array.prototype.slice.call(document.getElementsByClassName('svgInserido'))
        )
        if (!resultado) {
          d3.select('#svgTeste').remove()
          iteracoes++
        } else {
          d3.select('#svgTeste')
            .attr('id', null)
            .attr('class', 'svgInserido')
          isInserido = true
        }
      } while (!isInserido && iteracoes < MAXITERACOES)

      return isInserido
    },
    estampaEstaDentro (estampa, fundo, estampasInseridas) {
      const elementos = Array.prototype.slice.call(fundo.getElementsByTagName('path')),
        pontos = this.pathParaArray(estampa, 20)
      let passou = true
      let pathsFundo = elementos.filter(
        path => path.getAttribute('class') === 'ajuda'
      ).map(path => this.pathParaArray(path, 20))

      // verifica se os pontos da estampa está dentro da base e fora da ajuda
      pontos.some((ponto) => {
        /* debugando pontos
        painelPrincipal.append('circle')
          .attr('cx', ponto[0])
          .attr('cy', ponto[1])
          .attr('r', '1')
          .attr('fill', 'red')
        */
        elementos.some((elemento) => {
          if (!pointInSvgPolygon.isInside(ponto, elemento.getAttribute('d'))) {
            if (elemento.getAttribute('class') === 'base') {
              // console.log(ponto.toString() + ' - fora de base')
              passou = false
              return true
            } else {
              // console.log(ponto.toString() + ' - fora de ajuda')
            }
          } else {
            if (elemento.getAttribute('class') === 'ajuda') {
              // console.log(ponto.toString() + ' - dentro de ajuda')
              passou = false
              return true
            } else {
              // console.log(ponto.toString() + ' - dentro de base')
            }
          }
        })
        return !passou
      })

      // se já foi determinado que não pode colocar a estampa no local, retorna o resultado
      if (!passou) return false

      // verifica se a estampa não está por cima de uma ajuda porém sem intersectar por ela
      pathsFundo.some((path) => {
        path.some((ponto) => {
          /* debugando pontos
          painelPrincipal.append('circle')
            .attr('cx', ponto[0])
            .attr('cy', ponto[1])
            .attr('r', '1')
            .attr('fill', 'red')
          */
          if (pointInSvgPolygon.isInside(ponto, estampa.getAttribute('d'))) {
            // console.log(ponto.toString() + ' - dentro de ajuda')
            passou = false
            return true
          }
        })
        return !passou
      })

      // se já foi determinado que não pode colocar a estampa no local, retorna o resultado
      if (!passou) return false

      // verifica se os pontos da estampa está dentro de alguma estampa
      pontos.some((ponto) => {
        estampasInseridas.some((estampa) => {
          if (pointInSvgPolygon.isInside(ponto, estampa.getAttribute('d'))) {
            passou = false
            return true
          }
        })
        return !passou
      })

      // se mesmo depois de tudo isso conseguiu passar por todos os testes, retorna o resultado (true ou false)
      return passou
    },
    funcaoZeta (c, N) {
      let soma = 0
      const NMAX = 100000
      for (let i = N; i < NMAX; i++) {
        soma += Math.pow(i, -c)
      }
      return soma + (1.0 / (c - 1)) * Math.pow(NMAX, 1 - c)
    },
    valorControle (N, expoente) {
      return Math.pow(N, -expoente)
    }
  }
}
</script>

<style lang="stylus">
  .card-examples
    .q-card
      width 300px
    .bigger
      width 450px
      max-width 90vw
    @media (max-width $breakpoint-xs-max)
      .q-card
        width 100%
</style>
