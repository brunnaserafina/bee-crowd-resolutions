//Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

function testeDeSelecao(lines) {
  let [valueA, valueB, valueC, valueD] = lines[0].split(" ");

  const ehMaior = valueC + valueD > valueA + valueB;

  if (
    valueB > valueC &&
    valueD > valueA &&
    ehMaior &&
    valueC >= 0 &&
    valueD >= 0 &&
    valueA % 2 === 0
  ) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
}

//exemplo de entrada:
testeDeSelecao(["2 3 2 6"]);
