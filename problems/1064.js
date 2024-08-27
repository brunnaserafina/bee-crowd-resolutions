// Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos.
// Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

// Entrada: A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

// Saída: O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.

function calculaMediaNumerosPositivos(lines) {
  const numerosPositivos = lines.map(Number).filter((num) => num > 0);
  const soma = numerosPositivos.reduce((acc, n) => acc + n, 0);

  console.log(`${numerosPositivos.length} valores positivos`);
  console.log((soma / numerosPositivos.length).toFixed(1));
}

const numeros = ["7", "-5", "6", "-3.4", "4.6", "12"];

//Exemplo de entrada:
calculaMediaNumerosPositivos(numeros);
