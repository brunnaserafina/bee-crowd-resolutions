//Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) 
//e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula de distância

function distancia(lines) {
  let [valueX1, valueY1] = lines[0].split(" ");
  let [valueX2, valueY2] = lines[1].split(" ");

  let distancia = Math.sqrt(
    (valueX2 - valueX1) ** 2 + (valueY2 - valueY1) ** 2
  );

  console.log(distancia.toFixed(4));
}

//exemplo de entrada:
distancia(["1.0 7.0", "5.0 9.0"]);
