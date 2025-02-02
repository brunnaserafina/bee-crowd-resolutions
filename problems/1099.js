// Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir.
// Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.
// Entrada: A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.
// Saída: Imprima a soma de todos valores ímpares entre X e Y.

function somarImparesConsecutivos(lines) {
  const [qtdCasos, ...casos] = lines;

  for (let i = 0; i < Number(qtdCasos); i++) {
    let [X, Y] = casos[i].split(" ").map(Number);

    let inicio = Math.min(X, Y);
    let fim = Math.max(X, Y);

    let soma = 0;
    for (let j = inicio + (inicio % 2 === 0 ? 1 : 2); j < fim; j += 2) {
      soma += j;
    }

    console.log(soma);
  }
}

// Exemplo entrada:
const lines = ["7", "4 5", "13 10", "6 4", "3 3", "3 5", "3 4", "3 8"];

somarImparesConsecutivos(lines);
