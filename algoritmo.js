function algoritmo(estampa, objeto){
	alert("chamada funcionou! " + funcaoZeta(1.45, 2);
}

function funcaoZeta(c, N) {
    var soma = 0;
    var NMAX = 100000;
    for (double i = N; i < NMAX; i++) {
        soma += Math.pow(i, -c);
    }
    return soma + soma_estimada(c, NMAX);
}

function soma_estimada(c, NMAX) {
        return (1.0 / (c - 1)) * Math.pow(NMAX, 1 - c);
}

function valorControle(N, expoente){
    return Math.pow(N, -expoente);
}

var x, y;
 
function encontraXeY(forma) {

}

function criarEstampa() {
}

function preencherArea() {
}