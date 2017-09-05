require=function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({"point-in-svg-polygon":[function(a,b,c){function d(a){return a[0]}function e(a){return a[1]}function f(a){return parseFloat(a,10)}function g(a,b){return d(a)===d(b)&&e(a)===e(b)}function h(a,b){return[B(d(a),d(b)),B(e(a),e(b))]}function i(a,b){return[C(d(a),d(b)),C(e(a),e(b))]}function j(a,b){return[d(a)*b,e(a)*b]}function k(a,b){return[d(a)+d(b),e(a)+e(b)]}function l(a,b){return d(a)*d(b)+e(a)*e(b)}function m(a,b,c){return[d(a)+(d(b)-d(a))*c,e(a)+(e(b)-e(a))*c]}function n(a,b){var c=[],d=a;return 0!==d&&c.push(-b/a),c}function o(a,b,c){var d=[];if(y(a)<=I)return n(b,c);var e=a,f=b/e,g=c/e,h=f*f-4*g;if(h>0){var i=G(h);d.push(.5*(-f+i)),d.push(.5*(-f-i))}else 0===h&&d.push(.5*-f);return d}function p(a,b,c,d){if(y(a)<=I)return o(b,c,d);var e,f=[],g=a,h=b/g,i=c/g,j=d/g,k=(3*i-h*h)/3,l=(2*h*h*h-9*i*h+27*j)/27,m=h/3,n=l*l/4+k*k*k/27,p=l/2;if(n>0){var q=G(n);e=-p+q;var r=e>=0?E(e,1/3):-E(-e,1/3);e=-p-q,e>=0?r+=E(e,1/3):r-=E(-e,1/3),f.push(r-m)}else if(n<0){var s=G(-k/3),t=Math.atan2(G(-n),-p)/3,u=A(t),v=F(t),w=G(3);f.push(2*s*u-m),f.push(-s*(u+w*v)-m),f.push(-s*(u-w*v)-m)}else e=p>=0?-E(p,1/3):E(-p,1/3),f.push(2*e-m),f.push(-e-m);return f}function q(a,b,c,f,g,h,i,j){function k(a,b,c){var d=A(c),e=F(c);return[a*d-b*e,a*e+b*d]}function l(a){for(var b=[];a.length>0;)b.push([[a[0],a[1]],[a[2],a[3]],[a[4],a[5]]]),a.splice(0,6);return b}var m,n,o=d(a),p=e(a),r=d(i),s=e(i),t=D/180*(+f||0),u=0,v=0,w=[];if(j)u=j[0],v=j[1],m=j[2],n=j[3];else{var x=k(o,p,-t);o=d(x),p=e(x),x=k(r,s,-t),r=d(x),s=e(x);var B=(o-r)/2,C=(p-s)/2,E=B*B/(b*b)+C*C/(c*c);E>1&&(E=G(E),b=E*b,c=E*c);var I=b*b,J=c*c,K=(g===h?-1:1)*G(y((I*J-I*C*C-J*B*B)/(I*C*C+J*B*B)));m=K*b*C/c+(o+r)/2,n=K*-c*B/b+(p+s)/2,u=z(((p-n)/c).toFixed(9)),v=z(((s-n)/c).toFixed(9)),u=o<m?D-u:u,v=r<m?D-v:v,u<0&&(u=2*D+u),v<0&&(v=2*D+v),h&&u>v&&(u-=2*D),!h&&v>u&&(v-=2*D)}var L=v-u;if(y(L)>120*D/180){var M=v,N=r,O=s;v=u+120*D/180*(h&&v>u?1:-1),r=m+b*A(v),s=n+c*F(v),w=q([r,s],b,c,f,0,h,[N,O],[v,M,m,n])}L=v-u;var P=A(u),Q=F(u),R=A(v),S=F(v),T=H(L/4),U=4/3*b*T,V=4/3*c*T,W=[o,p],X=[o+U*Q,p-V*P],Y=[r+U*S,s-V*R],Z=[r,s];if(X[0]=2*W[0]-X[0],X[1]=2*W[1]-X[1],j)return l([X,Y,Z].concat(w));w=[X,Y,Z].concat(w).join().split(",");for(var $=[],_=0,aa=w.length;_<aa;_++)$[_]=_%2?k(w[_-1],w[_],t)[1]:k(w[_],w[_+1],t)[0];return l($)}function r(a){function b(){a=a.trim()}function c(b){for(var c=a.charCodeAt(b);c>=48&&c<=57;)b++,c=a.charCodeAt(b);return b}function h(){b();var d=0,e=0;","===a[d]&&(d++,e++),"-"===a[d]&&e++,e=c(e),"."===a[e]&&(e++,e=c(e));var g=a.substring(d,e);if(""!==g){var h=f(g);if(a=a.substring(e),a.length&&"e"===a[0].toLowerCase()){var i=1,j=0;a.length>1&&"-"===a[1]?(i=-1,j=c(2)):j=c(1);var k=f(a.substring(1,j));y(k)>0&&(h*=E(10,k)),a=a.substring(j)}return h}throw new Error("Expected number: "+a)}function i(c,d){b();for(var e=0,f=a.charCodeAt(0);f>=48&&f<=57||44===f||45===f;){for(var g=[],i=0;i<c;i++)g.push(h());d(g,e),b(),f=a.charCodeAt(0),e++}}function j(a,b){i(2*a,function(c,d){for(var e=[],f=0;f<a;f++)e.push(c.splice(0,2));b(e,d)})}function l(a,b){return function(c){b&&(c=c.map(function(a){return[d(a)+d(b),e(a)+e(b)]})),c.unshift(s),t.push({type:a,coords:c}),s=c[c.length-1]}}function m(a){return[a[0],[d(a[0])+2/3*(d(a[1])-d(a[0])),e(a[0])+2/3*(e(a[1])-e(a[0]))],[d(a[2])+2/3*(d(a[1])-d(a[2])),e(a[2])+2/3*(e(a[1])-e(a[2]))],a[2]]}function n(){var a=t[t.length-1],b=null;if(a&&a.type===w){var c=a.coords[2],f=d(s)-d(c),g=e(s)-e(c);b=[d(s)+f,e(s)+g]}else b=s;return b}function o(a){i(7,function(b){for(var c=k(b.slice(5,7),a),d=[s].concat(b.slice(0,5)).concat([c]),e=q.apply(null,d),f=0;f<e.length;f++)l(w)(e[f])})}function p(){if(b(),""!==a){var c=a[0];a=a.substring(1);var f=l(x),i=[0,0];switch(c){case"M":j(1,function(a,b){0===b?(s=a[0],r||(r=s)):l(x)(a)});break;case"m":j(1,function(a,b){if(0===b)s=s?k(a,s):a[0],r||(r=s);else{var c=a[0];l(x)([k(c,s)])}});break;case"C":j(3,l(w));break;case"c":j(3,l(w,s));break;case"Q":j(2,function(a){a.unshift(s),a=m(a),a.shift(),l(w)(a)});break;case"q":j(2,function(a){a=a.map(function(a){return k(a,s)}),a.unshift(s),a=m(a),a.shift(),l(w)(a)});break;case"S":j(2,function(a){var b=n();a.unshift(b),l(w)(a)});break;case"s":j(2,function(a){var b=n();a=a.map(function(a){return k(a,s)}),a.unshift(b),l(w)(a)});break;case"A":o(i);break;case"a":o(s);break;case"L":j(1,l(x));break;case"l":j(1,function(a){f([[d(a[0])+d(s),e(a[0])+e(s)]])});break;case"H":l(x)([[h(),e(s)]]);break;case"h":l(x,s)([[h(),0]]);break;case"V":l(x)([[d(s),h()]]);break;case"v":l(x,s)([[0,h()]]);break;case"Z":case"z":g(s,r)||l(x)([r]);break;default:throw new Error("Unknown operator: "+c)}}}if("string"!=typeof a)throw new Error("Polygon should be a path string");for(var r=null,s=null,t=[];a.length>0;)p();for(var u=0;u<t.length;u++){var v=t[u];v.type===x&&g(v.coords[0],v.coords[1])&&(t.splice(u,1),u--)}return t}function s(a,b,c,f,g,n){var o=[],q=i(g,n),r=h(g,n),s=j(a,-1),t=j(b,3),u=j(c,-3),v=k(s,k(t,k(u,f)));s=j(a,3),t=j(b,-6),u=j(c,3);var w=k(s,k(t,u));s=j(a,-3),t=j(b,3);for(var x=k(s,t),y=a,z=[e(g)-e(n),d(n)-d(g)],A=d(g)*e(n)-d(n)*e(g),B=p(l(z,v),l(z,w),l(z,x),l(z,y)+A),C=0;C<B.length;C++){var D=B[C];if(D>=0&&D<=1){var E=m(a,b,D),F=m(b,c,D),G=m(c,f,D),H=m(E,F,D),I=m(F,G,D),J=m(H,I,D);d(g)===d(n)?e(q)<=e(J)&&e(J)<=e(r)&&o.push(J):e(g)===e(n)?d(q)<=d(J)&&d(J)<=d(r)&&o.push(J):d(q)<=d(J)&&d(J)<=d(r)&&e(q)<=e(J)&&e(J)<=e(r)&&o.push(J)}}return o}function t(a,b,c,f){var g=(d(f)-d(c))*(e(a)-e(c))-(e(f)-e(c))*(d(a)-d(c)),h=(d(b)-d(a))*(e(a)-e(c))-(e(b)-e(a))*(d(a)-d(c)),i=(e(f)-e(c))*(d(b)-d(a))-(d(f)-d(c))*(e(b)-e(a));if(0!==i){var j=g/i,k=h/i;if(j>=0&&j<=1&&k>=0&&k<=1)return[[d(a)+j*(d(b)-d(a)),e(a)+j*(e(b)-e(a))]]}return[]}function u(a,b,c){var d=c.coords;switch(c.type){case w:return s(d[0],d[1],d[2],d[3],a,b);case x:return t(d[0],d[1],a,b);default:throw new Error("Unsupported shape type: "+c.type)}}function v(a,b){var c;c=b&&Array.isArray(b)?b:r(b);for(var f=0,h=0,i=0;i<c.length;i++)for(var j=c[i].coords,k=0;k<j.length;k++){var l=j[k];f=Math.min(f,d(l)),h=Math.min(h,e(l))}for(var m=[f-10,h-10],n=[],o=0;o<c.length;o++)for(var p=u(m,a,c[o]),q=0;q<p.length;q++){for(var s=!1,t=p[q],v=0;v<n.length;v++)if(g(n[v],t)){s=!0;break}s||n.push(t)}return n.length%2===1}var w="bezier3",x="line",y=Math.abs,z=Math.asin,A=Math.cos,B=Math.max,C=Math.min,D=Math.PI,E=Math.pow,F=Math.sin,G=Math.sqrt,H=Math.tan,I=1e-6;b.exports={isInside:v,segments:r}},{}]},{},["point-in-svg-polygon"]);
var pointInSvgPolygon = require("point-in-svg-polygon");

/* VARIÁVEIS GLOBAIS: nome das estampas, dos fundos, referência pra div das estampas e dos fundos */
var nomeEstampas = [],
nomeFundos = [],
fundosSvg = document.getElementById("fundosSvg"),
estampasDados = {
  "estampaCirculo": [0, 0 ,50],
  "estampaQuadrado": [ [-50,-50], [-50,50], [50,50], [50,-50] ],
  "estampaTriangulo": [ [-54.807,21.07], [41.785,46.951], [15.904,-49.641] ]
},
listaFormas = [];


// preenche o array com os nomes das estampas
for(var i = 0; i < document.getElementById("selectEstampa").options.length; i++) {
  nomeEstampas.push(document.getElementById("selectEstampa").options[i].value);
}

// preenche o array com os nomes dos fundos
for(var i = 0; i < document.getElementById("selectFundo").options.length; i++) {
  nomeFundos.push(document.getElementById("selectFundo").options[i].value);
}

/*
quando o usuário escolhe um outro fundo, deixa este visível e
apaga os outros. também verifica se o painel está preenchido,
e o reinicia
*/
function mudarFundo(fundoIdx) {

  if( ! $('#painelPrincipal').is(':empty') ) {
    $('#painelPrincipal').html('');
    document.getElementById('salvar').style.display = "none";
    document.getElementById('fundosSvg').style.display = "block";
  }

  for (var i = 0 ; i < nomeFundos.length ; i++) {

    if (i == fundoIdx) {
      document.getElementById(nomeFundos[i]).style.display = 'block';
    }
    else {
      document.getElementById(nomeFundos[i]).style.display = 'none';
    }

  }

}


function resetarFundo(fundoIdx) {
  if( ! $('#painelPrincipal').is(':empty') ) {
    $('#painelPrincipal').html('');
    document.getElementById('salvar').style.display = "none";
    document.getElementById('fundosSvg').style.display = "block";
    document.getElementById(nomeFundos[fundoIdx]).style.display = 'block';
  }
}

function salvar(fundoIdx) {

  saveSvgAsPng(document.getElementById("svgPrincipal"),  "mosaico_" + nomeFundos[fundoIdx] + ".png", {scale: 10, backgroundColor: "#FFFFFF", encoderOptions: 1});

}

/* FUNÇÕES PARA ALTERAR POLÍGONO DE ESTAMPA */
function centroidePoligono(poligono) {
  /*
  var node = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  node.setAttribute("points", poligono);

  var bbox = node.getBBox();

  console.log([(bbox.x + bbox.width) / 2.0, (bbox.y + bbox.height) / 2.0].toString());

  return [ (bbox.x + bbox.width) / 2.0, (bbox.y + bbox.height) / 2.0];
  */

  
  var x = 0, y = 0;
  for (var i = 0 ; i < poligono.length ; i++) {
    x += poligono[i][0];
    y += poligono[i][1];
  }
  return [x / poligono.length * 1.0, y / poligono.length * 1.0];
  
  
}

function transladaPoligono(poligono, x, y) {
  var temp = [];
  for (var i = 0 ; i < poligono.length ; i++) {
    temp.push([poligono[i][0] + x, poligono[i][1] + y]);
  }
  return temp;
}

function escalaForma(tipoEstampa, forma, escala) {
  if (tipoEstampa == "estampaCirculo") {
    return [forma[0], forma[1], forma[2] * escala];
  }
  else {
    return escalaPoligono(forma, escala);
  }
}

function transladaForma(tipoEstampa, forma, x, y) {

  if (tipoEstampa == "estampaCirculo") {
    return [forma[0] + x, forma[1] + y, forma[2]];
  }
  else {
   return transladaPoligono(forma, x, y);
  }
}

function rotacionaForma(tipoEstampa, forma, angulo) {

  if (tipoEstampa == "estampaCirculo") {
    return forma;
  }
  else {
    return rotacionaPoligono(forma, angulo);
  }
}

function escalaPoligono(poligono, s) {
  var centroide = centroidePoligono(poligono);

  var temp = transladaPoligono(poligono, -centroide[0], -centroide[1]);

  for (var i = 0 ; i < temp.length ; i++) {
    temp[i] = [temp[i][0] * s, temp[i][1] * s];
  }
  return transladaPoligono(temp, centroide[0], centroide[1]);
}

function rotacionaPoligono(poligono, angulo) {
  var centroide = centroidePoligono(poligono),
  x, y,
  cos = Math.cos(angulo),
  sen = Math.sin(angulo),
  temp = transladaPoligono(poligono, -centroide[0], -centroide[1]);

  for (var i = 0 ; i < temp.length ; i++) {
    x = temp[i][0] * cos - temp[i][1] * sen;
    y = temp[i][0] * sen + temp[i][1] * cos;
    temp[i] = [x,y];
  }
  return transladaPoligono(temp, centroide[0], centroide[1]);
}

// http://phrogz.net/SVG/convert_path_to_polygon.xhtml
// TODO: verificar porquê causa erros no safari, retorna vetor vazio
function pathToPoints(path,samples){
  if (!samples) samples = 0;
  var doc = path.ownerDocument;
  var poly = doc.createElementNS('http://www.w3.org/2000/svg','polygon');

  // Put all path segments in a queue
  for (var segs=[],s=path.pathSegList,i=s.numberOfItems-1;i>=0;--i) segs[i] = s.getItem(i);
    var segments = segs.concat();

  var seg,lastSeg,points=[],x,y;
  var addSegmentPoint = function(s){
    if (s.pathSegType == SVGPathSeg.PATHSEG_CLOSEPATH){

    }else{
      if (s.pathSegType%2==1 && s.pathSegType>1){
        // All odd-numbered path types are relative, except PATHSEG_CLOSEPATH (1)
        x+=s.x; y+=s.y;
      }else{
        x=s.x; y=s.y;
      }         
      var lastPoint = points[points.length-1];
      if (!lastPoint || x!=lastPoint[0] || y!=lastPoint[1]) points.push([x,y]);
    }
  };
  for (var d=0,len=path.getTotalLength(),step=len/samples;d<=len;d+=step){
    var seg = segments[path.getPathSegAtLength(d)];
    var pt  = path.getPointAtLength(d);
    if (seg != lastSeg){
      lastSeg = seg;
      while (segs.length && segs[0]!=seg) addSegmentPoint( segs.shift() );
    }
    var lastPoint = points[points.length-1];
    if (!lastPoint || pt.x!=lastPoint[0] || pt.y!=lastPoint[1]) points.push([pt.x,pt.y]);
  }
  for (var i=0,len=segs.length;i<len;++i) addSegmentPoint(segs[i]);
  /*
  for (var i=0,len=points.length;i<len;++i) points[i] = points[i].join(',');
    poly.setAttribute('points',points.join(' '));
  return poly;
  */
  return points;
}

function pathParaArray(pathNome) {
  var path = document.createElementNS('http://www.w3.org/2000/svg','path');
  path.setAttribute("d", document.getElementById(pathNome).getAttribute("d"));

  return pathToPoints(path, 100);
}

// insere valores no circulo
function positionCircle(circle) {
  circle.attr("cx", function(d) { return d[0]; })
  .attr("cy", function(d) { return d[1]; });
}

// insere valores do poligono
function positionPath(path) {
  path.attr("d", function(d) { return "M" + d.join("L") + "Z"; });
}

/* INÍCIO: código para verificar se círculo está dentro do polígono */

function estaDentro(tipoEstampa, forma, arrayFundo) {

  if (tipoEstampa == "estampaCirculo") {
    return circuloDentro(forma, arrayFundo);
  }
  else {
    return poligonoDentro(forma, arrayFundo);
  }
}

/* função nova para testar múltiplos poligonos, com classes 'base' e 'ajuda' */
function estaDentroPoligonos(tipoEstampa, forma, poligonosFundo) {
  var dentro = false;

  for (var i = 0 ; i < poligonosFundo.length ; i++) {
    if (poligonosFundo[i][0] == "base") {
      if (estaDentro(tipoEstampa, forma, poligonosFundo[i][1])) {
        dentro = true;
      }
    }
    else {
      if (estaTocando(tipoEstampa, forma, poligonosFundo[i][1])) {
        return false;
      }
    }
  }

  return dentro;

}

function estaTocando(tipoEstampa, forma, poligonoFundo) {
  if (tipoEstampa == "estampaCirculo") {
    return interseccaoCirculo(forma, poligonoFundo);
  }
  else {
    return interseccaoPoligono(forma, poligonoFundo);
  }
}

/* função nova para testar múltiplas paths, com classes 'base' e 'ajuda' */
function estaDentroPaths(tipoEstampa, forma, pathsFundo) {
  var dentro = false;

  for (var i = 0 ; i < pathsFundo.length ; i++) {
    if (pathsFundo[i].getAttribute("class") == "base") {
      if (formaDentroPath(tipoEstampa, forma, pathsFundo[i])) {
        dentro = true;
      }
    }
    else {
      if (formaDentroPath(tipoEstampa, forma, pathsFundo[i])) {
        return false;
      }
    }
  }

  return dentro;

}

function formaDentroPath(tipoEstampa, forma, path) {
  if (tipoEstampa == "estampaCirculo") {
    return poligonoDentroPath(forma[1], path);
  }
  else {
    return poligonoDentroPath(forma, path);
  }
}

function pontoDentroPath(ponto, path) {

  return pointInSvgPolygon.isInside(ponto, path.getAttribute("d"));
}

function poligonoDentroPath(polygonTest, path) {

  for (var i = 0 ; i < polygonTest.length ; i++) {
    if (!pontoDentroPath(polygonTest[i], path)) {
      return false;
    }
  }
  return true;
}

function poligonoDentro(polygonTest, polygon) {

  for (var i = 0 ; i < polygonTest.length ; i++) {
    if (!pointInPolygon(polygonTest[i], polygon)) {
      return false;
    }
  }
  return true;
}

function interseccaoPoligono(polygon1, polygon2) {

  // testa se pontos estão dentro do poligono
  for (var i = 0 ; i < polygon1.length ; i++) {
    if (pointInPolygon(polygon1[i], polygon2)) {
      return true;
    }
  }

  // testa se arestas estão dentro do polígono
  var temp1 = polygon1.slice(),
      temp2 = polygon2.slice();

  temp1.push(polygon1[0]);
  temp2.push(polygon2[0]);

  for (var i = 0 ; i < temp2.length - 1; i++) {
    for (var j = 0 ; j < temp1.length - 1; j++) {
      if (interseccaoDuasLinhas([temp1[j], temp1[j + 1]], [temp2[i], temp2[i + 1]])) {
        return true;
      }
    }
  }
  return false;
}

function interseccaoDuasLinhas(linha1, linha2) {
  var m1 = (linha1[1][1]-linha1[0][1]) / (linha1[1][0]-linha1[0][0]),
      m2 = (linha2[1][1]-linha2[0][1]) / (linha2[1][0]-linha2[0][0]);

  if (m1 == m2) return false;

  var cx = ((linha1[0][1] - (linha1[0][0] * m1)) - (linha2[0][1] - (linha2[0][0] * m2))) / (m2 - m1);
  return ((cx >= Math.min(linha1[0][0], linha1[1][0]) && cx <= Math.max(linha1[0][0], linha1[1][0])) && (cx >= Math.min(linha2[0][0], linha2[1][0]) && cx <= Math.max(linha2[0][0], linha2[1][0])));
  }

  function circuloDentro(circle, polygon) {
  return pointInPolygon(circle, polygon)
  && !polygonEdges(polygon).some(function(line) { return pointLineSegmentDistance(circle, line) < circle[2]; });
  }

  function interseccaoCirculo(circle, polygon) {
  return pointInPolygon(circle, polygon)
  || polygonEdges(polygon).some(function(line) { return pointLineSegmentDistance(circle, line) < circle[2]; });
}

function interseccaoDoisCirculos(circle1, circle2) {

  var deltax = Math.abs(circle2[0] - circle1[0]),
  deltay;

  if (deltax < (circle2[2] + circle1[2])) {

    deltay = Math.abs(circle2[1] - circle1[1]);
    if (deltay < (circle2[2] + circle1[2])) {
      return (Math.sqrt(Math.pow(circle1[0] - circle2[0], 2) + Math.pow(circle1[1] - circle2[1], 2)) >= (circle2[2] + circle1[2]));
    }
  }

  return true;
}

function interseccaoForma(tipoEstampa, forma1, forma2) {
  if (tipoEstampa == "estampaCirculo") 
    return !interseccaoDoisCirculos(forma1, forma2);
  else 
    return interseccaoPoligono(forma1, forma2);
}

function polygonEdges(polygon) {
  return polygon.map(function(p, i) {
    return i ? [polygon[i - 1], p] : [polygon[polygon.length - 1], p];
  });
}

function pointInPolygon(point, polygon) {
  for (var n = polygon.length, i = 0, j = n - 1, x = point[0], y = point[1], inside = false; i < n; j = i++) {
    var xi = polygon[i][0], yi = polygon[i][1],
    xj = polygon[j][0], yj = polygon[j][1];

    if ((yi > y != yj > y) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

function pointLineSegmentDistance(point, line) {
  var v = line[0], w = line[1], d, t;
  return Math.sqrt(pointPointSquaredDistance(point, (d = pointPointSquaredDistance(v, w))
    ? ((t = ((point[0] - v[0]) * (w[0] - v[0]) + (point[1] - v[1]) * (w[1] - v[1])) / d) < 0 ? v
      : t > 1 ? w
      : [v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])])
    : v));
}

function pointPointSquaredDistance(v, w) {
  var dx = v[0] - w[0], dy = v[1] - w[1];
  return dx * dx + dy * dy;
}
/* FIM: código para verificar se círculo está dentro do polígono */

function corAleatoria(faixa) {
  var rgb = [];
  rgb.push(Math.floor(Math.random() * faixa));  // red
  rgb.push(Math.floor(Math.random() * faixa));  // green
  rgb.push(Math.floor(Math.random() * faixa));  // blue

  // Console.WriteLine("{0},{1},{2}", rgb[0], rgb[1], rgb[2]);

  // find max and min indexes.
  var max, min;

  if (rgb[0] > rgb[1]){
    max = (rgb[0] > rgb[2]) ? 0 : 2
    min = (rgb[1] < rgb[2]) ? 1 : 2;
  }
  else{
    max = (rgb[1] > rgb[2]) ? 1 : 2;
    var notmax = 1 + max % 2;
    min = (rgb[0] < rgb[notmax]) ? 0 : notmax;
  }
  rgb[max] = faixa - 1;
  rgb[min] = 0;

  function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return rgbToHex(rgb[0], rgb[1], rgb[2]);

}


// função zeta de Hurwitz
function funcaoZeta(c, N) {

  var soma = 0,
  NMAX = 100000;

  for (var i = N; i < NMAX; i++) {
    soma += Math.pow(i, -c);
  }

  return soma + soma_estimada(c, NMAX);
}

// valor utilizado na função zeta
function soma_estimada(c, NMAX) {

  return (1.0 / (c - 1)) * Math.pow(NMAX, 1 - c);
}

// valor utilizado ao longo da execução
function valorControle(N, expoente) {

  return Math.pow(N, -expoente);
}

function algoritmo(estampaIdx, fundoIdx) {

  listaFormas = [];

  // apaga o fundo escolhido visível
  document.getElementById(nomeFundos[fundoIdx]).style.display = 'none';

  document.getElementById('fundosSvg').style.display = "none";

  // pega a(s) path(s) do fundo
  var fundoSvg = document.getElementById(nomeFundos[fundoIdx]).contentDocument;

  var pathsFundo = fundoSvg.getElementsByTagName('path');

  // monta array de poligonos do fundo, com suas classes
  var poligonosFundo = [];

  for (var i = 0 ; i < pathsFundo.length ; i++) {
    poligonosFundo.push([pathsFundo[i].getAttribute("class"), pathToPoints(pathsFundo[i], 200)]);
  }

  // pega o array da estampa
  var arrayEstampa = estampasDados[nomeEstampas[estampaIdx]];

  var tipoEstampa = nomeEstampas[estampaIdx];

  var tipoFundo = nomeFundos[fundoIdx];

  // reinicia o painel
  if( ! $('#painelPrincipal').is(':empty') ) {
    $('#painelPrincipal').html('');
    document.getElementById('salvar').style.display = "none";
  }

  // declara variáveis que serão utilizadas para o preenchimento
  var razaoDaArea,
  constante,
  expoente,
  N = 3;

  constante = document.getElementById("numeroC").value;
  N = document.getElementById("numeroN").value;

  // calcula valores a serem utilizados nesta execução: razão e expoente
  razaoDaArea = 1.0 / funcaoZeta(constante, N);
  expoente = 0.5 * constante;

  // quando terminar o preenchimento, mostrar botão de salvar
  $.when(preencherArea()).then( function (x) {
    document.getElementById('salvar').style.display = "block";
  });


  function preencherArea() {

    var x,
    y,
    escala,
    largura = 100,
    altura = 100,
    numeroFormas = 0,
    numeroIteracoes = 0,
    maxIteracoes = 1000,
    maxFormas = document.getElementById("numeroQuantidade").value;

    // acesso ao svg de pintura
    var painelPrincipal = d3.select("#painelPrincipal").append("svg")
    .attr("id", "svgPrincipal")
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 100 100")
    .attr("width", "600")
    .attr("height", "600");

    // cor a ser usada na execução
    var cor = corAleatoria(156);

    //d3.timer(function() {
      do {

        // gera forma
        var forma = gerarForma();

        // só para de executar assim??
        if (numeroFormas > maxFormas || numeroIteracoes > maxIteracoes) break;

        if (forma != null) {


          // adiciona forma
          if (nomeEstampas[estampaIdx] == "estampaCirculo") {
            // círculo
            painelPrincipal.append("circle")
            .datum(forma)
            .call(positionCircle)
            .attr('class', "")
            .style("fill", cor)
            .style("fill-opacity", (Math.random() + .5) / 2)
            //.attr("r", "0")
            //.transition()
            .attr("r", function(d) { return d[2]; });
          }
          else {
            // outros
            painelPrincipal.append("path")
            .datum(forma)
            .attr('class', "")
            .style("fill", cor)
            .style("fill-opacity", (Math.random() + .5) / 2)
            .call(positionPath);
          }

          listaFormas.push(forma);

          N++;
          numeroFormas++;
        }
        else {
          // limite de tentativas de posicionar atingido... será que assim para??
          numeroIteracoes = maxIteracoes + 1;
          numeroFormas = maxFormas + 1;
          break;
        }
  

      } while (numeroFormas < maxFormas && numeroIteracoes < maxIteracoes);

    //});

    listaFormas = [];

    function gerarForma() {

      // gera valor de escala
      escala = razaoDaArea * valorControle(N, expoente);
      numeroIteracoes = 0;

      var forma,
      formaTransladada,
      formaValida,
      ponto;

      forma = escalaForma(tipoEstampa, arrayEstampa, escala);
      

      while (numeroIteracoes < maxIteracoes) {

        formaValida = true;

        formaTransladada =  encontrarXY(forma);

        if (x == -1 && y == -1) {
          if (numeroFormas == 0) { // se nem a primeira forma consegue ser inserida, diminua o N
            N++;
          }
          return null;
        }

        for (var i = 0 ; i < listaFormas.length ; i++) {
          if (interseccaoForma(tipoEstampa, formaTransladada, listaFormas[i])) {
            formaValida = false;
            break;
          }
        }

        if (formaValida) {
          return formaTransladada;
        }

        numeroIteracoes++;

      }

      return null;
    }

    function encontrarXY(forma) {
      x = Math.random() * largura,
      y = Math.random() * altura;
      
      var iteracoes_posicao = 0;

      var copiaForma = rotacionaForma(tipoEstampa, forma, Math.random() * 2 * Math.PI);
      copiaForma = transladaForma(tipoEstampa, copiaForma, x, y);
      
      while ( !estaDentroPoligonos(tipoEstampa, copiaForma, poligonosFundo) ){

        x = Math.random() * largura,
        y = Math.random() * altura;

        copiaForma = rotacionaForma(tipoEstampa, forma, Math.random() * 2 * Math.PI);
        copiaForma = transladaForma(tipoEstampa, copiaForma, x, y);

        iteracoes_posicao++;
        if (iteracoes_posicao > maxIteracoes) {
          // passou do limite
          x = -1; y = -1;
          return;
        }
      }
        // se chegou aqui, x e y são válidos

      return copiaForma;
    }
  }

}