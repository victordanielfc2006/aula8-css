// Exercício 1

let numero1 = [1, 2, 3, 4, 5];

// Calculando a soma dos elementos do array
let soma = numero1.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0); // O segundo argumento é o valor inicial do acumulador

console.log("Soma:", soma);
let numero2 = 2;

// Loop while para imprimir números pares de 2 a 10
while (numero1 <= 10) {
    if (numero1 % 2 === 0) { // Verifica se o número é par
        console.log(numero1);
    }
    numero1++; // Incrementa o número para o próximo ciclo
}

// Exercício 2

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Exibe: [2, 4, 6, 8, 10]
let idade;
do {
    console.log("Por favor, insira sua idade:");
    idade = prompt("Insira sua idade:");
} while (idade <= 0);

console.log(`Sua idade é ${idade}.`);

// Exercício 3

// Passo 1: Definir o objeto
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Passo 2: Converter o objeto em uma string JSON
const pessoaString = JSON.stringify(pessoa);

// Passo 3: Exibir a string resultante
console.log(pessoaString);

// Exercício 4

// Função para calcular a sequência de Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Solicita ao usuário o número de termos da sequência de Fibonacci
const numTermos = prompt("Digite o número de termos da sequência de Fibonacci:");

// Verifica se o valor inserido é válido
if (!numTermos || numTermos === "" || isNaN(numTermos)) {
    alert("Por favor, insira um número válido.");
} else {
    // Calcula e exibe a sequência de Fibonacci
    const sequenciaFibonacci = fibonacci(parseInt(numTermos));
    console.log(sequenciaFibonacci);
}

// Exercício 5

// Criação do objeto pessoa com uma propriedade de idade inicial
let pessoa1 = {
    nome: "João",
    idade: 25 // Idade inicial é 25 anos
};

// Função para atualizar a idade da pessoa
function atualizarIdade(pessoa, novaIdade) {
    pessoa.idade = novaIdade;
}

// Chamada da função para atualizar a idade da pessoa para 30 anos
atualizarIdade(pessoa, 30);

// Exibindo o resultado na tela
console.log(`A nova idade de ${pessoa.nome} é ${pessoa.idade} anos.`);


// Agora é com você

// Inicializa um array vazio para armazenar os nomes dos clientes
var clientes = [];

// Loop infinito para continuar pedindo nomes até que o usuário decida parar
while (true) {
    // Solicita ao usuário para inserir o nome de um cliente
    var nomeCliente = prompt("Por favor, insira o nome do cliente:");

    // Verifica se o usuário digitou algo
    if (nomeCliente === null || nomeCliente.trim() === "") {
        alert("Você decidiu parar. Os nomes dos clientes cadastrados foram:");
        break; // Sai do loop se o usuário decidir parar
    }

    // Adiciona o nome do cliente ao array
    clientes.push(nomeCliente);

    // Pergunta ao usuário se ele deseja inserir mais nomes
    var continuar = confirm("Deseja inserir mais nomes?");
}

// Exibe todos os nomes de clientes armazenados
for (var i = 0; i < clientes.length; i++) {
    alert(clientes[i]);
}