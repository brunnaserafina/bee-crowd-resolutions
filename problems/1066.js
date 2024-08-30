// Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

// Entrada: O arquivo de entrada contém 5 valores inteiros quaisquer.

// Saída:Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.

function retornaTiposNumero(lines) {
  let pares = 0, impares = 0, positivos = 0, negativos = 0;

  lines.slice(0, 5).map(Number).forEach((num) => {
    if (num % 2 === 0) pares++;
    else impares++;

    if (num > 0) positivos++;
    else if (num < 0) negativos++;
  });

  console.log(`${pares} valor(es) par(es)`);
  console.log(`${impares} valor(es) impar(es)`);
  console.log(`${positivos} valor(es) positivo(s)`);
  console.log(`${negativos} valor(es) negativo(s)`);
}

// Exemplo de entrada:
const lines = ["-5", "0", "-3", "-4", "12"];

retornaTiposNumero(lines);
