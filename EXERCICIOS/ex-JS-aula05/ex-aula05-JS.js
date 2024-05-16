// Programa para aplicar desconto em produtos
let precoOriginal = parseFloat(prompt("Informe o valor original do produto"))
let codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4, DESC5):");

switch (codigoPromocional) {
    case 'DESC1':
        valorComDesconto = valorProduto * 0.95
        break;
    case 'DESC2':
        valorComDesconto = valorProduto * 0.90
        break;
    case 'DESC3':
        valorComDesconto = valorProduto * 0.85
        break;
    case 'DESC4':
        valorComDesconto = valorProduto * 0.80
        break;
    case 'DESC5':
        valorComDesconto = valorProduto * 0.75
        break;
}
// Jogo Adivinhação
let usuario1 = 7
while (true) {
    let number = parseInt (prompt("Digite um número de 0 a 10"))
    if (number === usuario1) {
        alert ("Parabéns ! Você acertou.");
        break;
    }   else {
        alert ("Tente novamente.");

    }
}