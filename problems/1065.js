// Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

// Entrada: O arquivo de entrada contém 5 valores inteiros quaisquer.
// Saída: Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.

function retornaQtdNumerosPares(lines) {
  const qtdNumerosPares = lines
    .slice(0, 5)
    .map(Number)
    .filter((valor) => valor % 2 === 0).length;

  console.log(`${qtdNumerosPares} valores pares`);
}

// Exemplo de entrada:
const lines = ["7", "-5", "6", "-3.4", "4.6", "12"];

retornaQtdNumerosPares(lines);
