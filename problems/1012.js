//Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
//a) a área do triângulo retângulo que tem A por base e C por altura.
//b) a área do círculo de raio C. (pi = 3.14159)
//c) a área do trapézio que tem A e B por bases e C por altura.
//d) a área do quadrado que tem lado B.
//e) a área do retângulo que tem lados A e B.

function area(lines) {
  let [valueA, valueB, valueC] = lines[0].split(" ");

  valueA = Number(valueA);
  valueB = Number(valueB);
  valueC = Number(valueC);

  const areaTriangulo = (valueA * valueC) / 2;
  const areaCirculo = 3.14159 * Math.pow(valueC, 2);
  const areaTrapezio = (valueA + valueB) * valueC / 2;
  const areaQuadrado = valueB * valueB;
  const areaRetangulo = valueA * valueB;

  console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
  console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
  console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
  console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
  console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
}

//Exemplo de entrada:
area(["3.0 4.0 5.2"]);
