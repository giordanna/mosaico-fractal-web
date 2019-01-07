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
            <img :src="'statics/fundos/' + listaEstampas[paginaEstampa-1].short + '.svg'">

            <q-card-title slot="overlay">
              <div slot="subtitle" class="text-right">{{ listaEstampas[paginaEstampa-1].nome }}</div>
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
            <img :src="'statics/fundos/' + listaFundos[paginaFundo-1].short + '.svg'">

            <q-card-title slot="overlay">
              <div slot="subtitle" class="text-right">{{ listaFundos[paginaFundo-1].nome }}</div>
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
          <q-input type="number" v-model="numeroEstampas">

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
        <q-btn color="dark" class="full-width" label="Clique para iniciar" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      listaEstampas: [],
      paginaEstampa: 1,
      listaFundos: [],
      paginaFundo: 1,
      estampaPreenchimento: '',
      formaFundo: '',
      numeroEstampas: 1000,
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
