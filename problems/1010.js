//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1,
//o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
//Após, calcule e mostre o valor a ser pago.

function calculoSimples(lines) {
  const [codigo1, qtd1, valor1] = lines[0].split(" ");
  const [codigo2, qtd2, valor2] = lines[1].split(" ");

  const valorPago = qtd1 * valor1 + qtd2 * valor2;

  console.log(`VALOR A PAGAR: R$ ${valorPago.toFixed(2)}`);
}

//Exemplo de entrada:
calculoSimples(["12 1 5.30", "16 2 5.10"]);


