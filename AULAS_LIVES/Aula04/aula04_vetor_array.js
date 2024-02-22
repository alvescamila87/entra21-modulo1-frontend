let notas = [10, 5.6, 8.5]

// ver notas por índices:
console.log("Primeira nota: " + notas[0]);
console.log(notas[1]);
console.log(notas[2]);

// ou com for

for(let i=0; i < notas.length; i++) {
    console.log(i + "º nota: " + notas[i]);
}

// ver todas as notas
console.log(notas)

// diminuir o tempo de processamento

let tamanho = notas.length

for(let i=0; i < tamanho; i++) {
    console.log((i + 1) + "º nota: " + notas[i]);
}

// array é um objeto
console.log(typeof(notas))

// declaração de array

let nome = new Array(5)

console.log(typeof(nome));
