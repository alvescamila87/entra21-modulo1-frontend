function calcularValores() {
    let valor1 = Number(document.getElementById("primeiroValor").value);
    let valor2 = Number(document.getElementById("segundoValor").value);
    const optionMath = document.querySelector("input[name='optionMath']:checked").value;

    if((valor1>=0 && valor1<=100) && (valor2>=0 && valor2<=100)) {
        switch (optionMath) {
            case "+":
                document.getElementById("resultado").innerHTML = valor1 + valor2;
                break;
            case "-":
                document.getElementById("resultado").innerHTML = valor1 - valor2;
                break;
            case "/":
                document.getElementById("resultado").innerHTML = (valor1 / valor2).toFixed(2);
                break
            case "*":
                document.getElementById("resultado").innerHTML = valor1 * valor2;
                break;
        }
    } else {
        alert("Valores inválidos. Tente novamente... ")
    }

}