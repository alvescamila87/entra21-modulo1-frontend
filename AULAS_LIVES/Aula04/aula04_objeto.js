// objeto

let pessoa = {

    // atributos | características
    nome: "Maria",
    idade: 36,

    // função
    exibirInfo() {
        return "Nome: " + this.nome + ", Idade: " + this.idade
    }

}

// forma1: invocando objeto com a função
pessoa.exibirInfo()

// forma 2: invocando objeto com a função
console.log(pessoa.exibirInfo())
