// 8) Cálculo do IMC

let altura = ("Digite sua altura em metros:");
let peso = ("Digite seu peso em quilogramas.");
let imc = peso / (altura ** 2);
console.log("Seu IMC é:" + imc.toFixed(2));
if (imc>= 18.5 && imc<= 24.9) {
    console.log("Seu IMC está dentro do intervalo saudável.");
} else {
    console.log("Seu IMC não está dentro do intervalo saudável.");
}