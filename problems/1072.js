// Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
// Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

// Entrada: A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
// Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

// Saída: Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.

function retornaIntevaloNumeros(lines) {
  const [qtdTotalValores, ...valores] = lines.map(Number);

  const MIN = 10;
  const MAX = 20;

  const qtdIn = (valores.filter(valor => valor >= MIN && valor <= MAX)).length;
  const qtdOut = qtdTotalValores - qtdIn;

  console.log(`${qtdIn} in`);
  console.log(`${qtdOut} out`);
}

const lines = ["4", "14", "123", "10", "-25"];

retornaIntevaloNumeros(lines);
