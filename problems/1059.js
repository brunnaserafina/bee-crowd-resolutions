// Faça um programa que mostre os números pares entre 1 e 100, inclusive.

// Entrada: Neste problema extremamente simples de repetição não há entrada.
// Saída: Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.

function retornaNumerosPares() {
  let numero = 2;

  while (numero <= 100) {
    console.log(numero);
    numero += 2;
  }
}

retornaNumerosPares();
