// Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

function retornaMaiorValorEPosicao(lines) {
  let valorMaior = Number.MIN_SAFE_INTEGER;
  let posicao = 0;

  for (let i = 0; i <= 100; i++) {
    const valorAtual = Number(lines[i]);

    if (valorAtual > valorMaior) {
      valorMaior = valorAtual;
      posicao = i + 1;
    }
  }

  console.log(valorMaior);
  console.log(posicao);
}

// Exemplo de entrada: (para o exemplo foram usados menos valores)
const lines = ["3", "10", "55", "10"];

retornaMaiorValorEPosicao(lines);
