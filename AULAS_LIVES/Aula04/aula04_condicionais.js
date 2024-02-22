// == != ===
// == avalia se o valor é igual ao outro
// === avalia se o valor é igual ao outro e também o tipo de dado

let numero = 15;
console.log(typeof(numero));

let numeroString = "15";
console.log(typeof(numeroString));

let numeroNovo = 15;
console.log(typeof(numeroNovo));


if(numeroString === numero) {
    console.log("Valores iguais");
} else {
    console.log("Valores NÃO iguais");
}

if(numeroNovo === numero) {
    console.log("Possui o mesmo tipo");
} else {
    console.log("Não possui o mesmo tipo");
}


let dia = 5

switch(dia) {
    case 1:
        console.log("Domingo");        
        break;
    case 2:
        console.log("Segunda-feira");        
        break;
    case 3:
        console.log("Terça-feira");        
        break;
    case 4:
        console.log("Quarta-feira");        
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");        
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");        
}

// continue: salta NÃO para completamente, para o próximo

for(let i=0; i<5;i++) {

    if(i==5) {
        continue;
    }
    console.log("Javascript");

}

// Do While | For | While

do {
    console.log("Javascript");
    i++;
} while (i < 5);

while(i<5) {
    console.log("Javascript!!")
    i++
} 