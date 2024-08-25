// Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos).
// A seguir, mostre a quantidade de valores positivos digitados.

// Entrada: Seis valores, negativos e/ou positivos.
// Saída: Imprima uma mensagem dizendo quantos valores positivos foram lidos.

function retornaQtdNumerosPositivos(lines) {
  const qtdNumerosPositivos = lines.map(Number).filter((num) => num > 0).length;

  console.log(`${qtdNumerosPositivos} valores positivos`);
}

// Exemplo de entrada:
const lines = ["7", "-5", "6", "-3.4", "4.6", "12"];

retornaQtdNumerosPositivos(lines);
