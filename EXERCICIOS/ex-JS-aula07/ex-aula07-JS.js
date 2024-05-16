let meuCliente = [];

let continuar = true;

while (continuar) {
        let nome = prompt("Insira o nome do cliente:")
        meuCliente.push(nome);

        let resposta = prompt("Deseja inserir mais nomes? (s/n)")
        if (resposta.toLowerCase()  !=='s') {
            continuar = false;
        }
}