//Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R).
//A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

function esfera(raio) {
  const volume = (4 / 3) * 3.14159 * Math.pow(raio, 3);

  console.log(`VOLUME = ${volume.toFixed(3)}`);
}

//Exemplo de entrada:
esfera(3);