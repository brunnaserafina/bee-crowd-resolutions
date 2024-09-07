// Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

// Entrada: A entrada contém um valor inteiro N (N < 10000).

// Saída: Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

function retornaNumerosComRestoDois(lines) {
  const N = Number(lines[0]);

  for (let i = 2; i < 10000; i += N) {
    if (i % N === 2) {
      console.log(i);
    }
  }
}

// Exemplo de entrada:
retornaNumerosComRestoDois(["13"]);
