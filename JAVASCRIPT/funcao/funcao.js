// função sem  parâmetro

function soma() {
    var a = 5;
    var b = 15;
    var resultado = a + b;
    console.log(resultado);
}

soma();

function exibirMensagem() {
    console.log("Hello world!")
}

exibirMensagem();

// função com parâmetro

function multiplicaValores(a , b) {
    return a * b;
}

console.log("A mutiplicação dos valores é: " + multiplicaValores(10, 88));