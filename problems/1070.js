// Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

// Entrada: A entrada será um valor inteiro positivo.
// Saída: A saída será uma sequência de seis números ímpares.

function retonaImparesConsecutivos(lines) {
  let valor = Number(lines[0]);

  if (valor % 2 === 0) {
    valor++;
  }

  for (let i = 0; i < 6; i++) {
    console.log(valor);
    valor += 2;
  }
}

// Exemplo de entrada:
retonaImparesConsecutivos(["8"]);
