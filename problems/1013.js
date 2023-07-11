//Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”.

function ehMaior(lines) {
  let [valueA, valueB, valueC] = lines[0].split(" ");

  valueA = Number(valueA);
  valueB = Number(valueB);
  valueC = Number(valueC);

  let ehMaior = valueA;

  if (valueB > ehMaior) {
    ehMaior = valueB;
  }

  if (valueC > ehMaior) {
    ehMaior = valueC;
  }

  console.log(`${ehMaior} eh o maior`);
}

//Exemplo de entrada:
ehMaior(["7 14 106"]);
