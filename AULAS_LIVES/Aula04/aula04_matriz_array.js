// matriz

let anos = [
                        [2000,2001,2002], 
                        [2010,2011,2022], 
                        [2020,2021,2022]
                    ]

for(let linha=0; linha <  anos.length; linha++) {

    for(let coluna=0; coluna < anos[0].length; coluna++) {
        console.log(anos[linha][coluna])
    }

}

// for of (com conteúdo, sem índice)

for(let ano of anos) {
    console.log(ano)
}

// for in (sem conteúdo, com índice)

for(let ano in anos) {
    console.log(ano)
}