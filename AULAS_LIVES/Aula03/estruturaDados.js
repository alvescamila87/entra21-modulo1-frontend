let nota = 5

if(nota >= 7) {
    console.log("Aprovado nota: " + nota)
} else {
    if(nota >= 5) {
        console.log("Recuperação nota: " + nota)
    } else {
        console.log("Reprovado nota: " + nota)
    }
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