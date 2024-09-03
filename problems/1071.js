// Soma de ímpares consecutivos I
// Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.
// Entrada: O arquivo de entrada contém dois valores inteiros.
// Saída: O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.

function somaEntreImpares(lines) {
  const [valorMaior, valorMenor] = lines.map(Number);

  let somaImpares = 0;

  for (let i = valorMenor + 1; i < valorMaior; i++) {
    if (i % 2 !== 0) {
      somaImpares += i;
    }
  }

  console.log(somaImpares);
}

//Exemplo de entrada:
somaEntreImpares(["15", "12"]);
