//Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
// I=0 J=1
// I=0 J=2
// I=0 J=3
// I=0.2 J=1.2
// I=0.2 J=2.2
// I=0.2 J=3.2
// .....
// I=2 J=?
// I=2 J=?
// I=2 J=?

function retornaSequencia() {
  for (let i = 0; i <= 2; i = Number((i + 0.2).toFixed(1))) {
    for (let j = 1; j <= 3; j++) {
      const formattedI = Number(i.toFixed(1));
      const formattedJ = Number((j + i).toFixed(1));
      console.log(`I=${formattedI} J=${formattedJ}`);
    }
  }
}

retornaSequencia();
