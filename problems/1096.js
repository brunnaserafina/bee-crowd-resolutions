// Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
// I=1 J=7
// I=1 J=6
// I=1 J=5
// I=3 J=7
// I=3 J=6
// I=3 J=5
// ...
// I=9 J=7
// I=9 J=6
// I=9 J=5

function retornaSequencia() {
  for (let i = 1; i <= 9; i += 2) {
    console.log(`I=${i} J=${7}`);
    console.log(`I=${i} J=${6}`);
    console.log(`I=${i} J=${5}`);
  }
}

retornaSequencia();
