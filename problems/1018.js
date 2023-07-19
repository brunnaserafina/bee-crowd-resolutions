//Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. 
//As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

function cedulas(lines) {
  let valor = lines[0];
  let notasCem = 0;
  let notasCinquenta = 0;
  let notasVinte = 0;
  let notasDez = 0;
  let notasCinco = 0;
  let notasDois = 0;
  let notasUm = 0;

  if (valor >= 100) {
    notasCem = Math.floor(valor / 100);
    valor = valor - notasCem * 100;
  }

  if (valor >= 50) {
    notasCinquenta = Math.floor(valor / 50);
    valor = valor - notasCinquenta * 50;
  }

  if (valor >= 20) {
    notasVinte = Math.floor(valor / 20);
    valor = valor - notasVinte * 20;
  }

  if (valor >= 10) {
    notasDez = Math.floor(valor / 10);
    valor = valor - notasDez * 10;
  }

  if (valor >= 5) {
    notasCinco = Math.floor(valor / 5);
    valor = valor - notasCinco * 5;
  }

  if (valor >= 2) {
    notasDois = Math.floor(valor / 2);
    valor = valor - notasDois * 2;
  }

  if (valor >= 1) {
    notasUm = Math.floor(valor / 1);
    valor = valor - notasDois * 1;
  }

  console.log(`${lines[0]}`);
  console.log(`${notasCem} nota(s) de R$ 100,00`);
  console.log(`${notasCinquenta} nota(s) de R$ 50,00`);
  console.log(`${notasVinte} nota(s) de R$ 20,00`);
  console.log(`${notasDez} nota(s) de R$ 10,00`);
  console.log(`${notasCinco} nota(s) de R$ 5,00`);
  console.log(`${notasDois} nota(s) de R$ 2,00`);
  console.log(`${notasUm} nota(s) de R$ 1,00`);
}

cedulas([576]);
