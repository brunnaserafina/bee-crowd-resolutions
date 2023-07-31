//Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário.
//A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2.
//As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

function notasEMoedas(lines) {
  const value = lines[0];

  const notas = [100, 50, 20, 10, 5, 2];

  const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

  let resto = value * 100;

  console.log("NOTAS:");

  notas.forEach((nota) => {
    const quantidade = Math.floor(resto / (nota * 100));

    console.log(quantidade + " nota(s) de R$ " + nota.toFixed(2));

    resto %= nota * 100;
  });

  console.log("MOEDAS:");

  moedas.forEach((moeda) => {
    const quantidade = Math.floor(resto / (moeda * 100));

    console.log(quantidade + " moeda(s) de R$ " + moeda.toFixed(2));

    resto %= moeda * 100;
  });
}

//exemplo de entrada:
notasEMoedas([576.73]);
