//Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
//O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.
//O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

function calcularContaPagar(lines) {
    let [codigo, quantidade] = lines[0].split(" ");
    
    const itens = {
        1: 4,
        2: 4.50,
        3: 5,
        4: 2,
        5: 1.50
    }

    const total = (itens[codigo] * quantidade).toFixed(2);
    const mensagem = "Total: R$ "

    console.log(mensagem + total);  
}
  
//entrada:
calcularContaPagar(["3 2"]);