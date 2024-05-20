function calculoImc(peso, altura) {
    let imc = peso/(altura*altura)
    let msg
    if (imc > 40) {
        msg = "Obesidade grau 3"
        } else if (imc > 35) {
        msg = "Obesidade grau 2"
        } else if (imc > 30) {
        msg = "Obesidade grau 1"
        } else if(imc > 25)  {
        msg = "Acima do peso"
        } else if (imc > 18.5) {
        msg = "Peso normal"
        } else if (imc > 17) {
            msg = "Abaixo do peso"
        } else if (
            msg = "Muito abaixo do peso"
        )
        return msg
}
alert("Vamos calcular o IMC")
let peso = Number(prompt("Qual o seu peso?"))
let altura = Number(prompt("Qual a sua altura?"))
alert(calculoImc(peso, altura))