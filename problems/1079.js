// Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir.
// Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal.
// Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

// Entrada: O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

// Saída: Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.

function retornaMediaPonderada(lines) {
  const casosTeste = Number(lines[0]);

  for (let i = 1; i <= casosTeste; i++) {
    const [nota1, nota2, nota3] = lines[i].split(" ").map(Number);

    const mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    console.log(mediaPonderada.toFixed(1));
  }
}

// Exemplo de entrada:
const lines = ["3", "6.5 4.3 6.2", "5.1 4.2 8.1", "8.0 9.0 10.0"];

retornaMediaPonderada(lines);
