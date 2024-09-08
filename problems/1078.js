// Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:
// 1 x N = N      2 x N = 2N        ...       10 x N = 10N

// Entrada: A entrada contém um valor inteiro N (2 < N < 1000).

// Saída: Imprima a tabuada de N, conforme o exemplo fornecido.

function retornaTabuada(lines) {
  const N = Number(lines[0]);

  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`);
  }
}

// Exemplo de entrada:
retornaTabuada(["140"]);
