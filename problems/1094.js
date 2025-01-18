// Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda
// para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano,
// quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.
// Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos.
// Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados,
// o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

function retornaPercentual(qtd, total) {
  return ((qtd * 100) / total).toFixed(2) + " %";
}

function retornaQtdEPercentualCobaias(lines) {
  const [numeroDeCasos, ...experimentos] = lines;
  const totais = { C: 0, R: 0, S: 0 };

  for (let i = 0; i < Number(numeroDeCasos); i++) {
    const [quantidade, tipoDeCobaia] = experimentos[i].split(" ");
    totais[tipoDeCobaia] += Number(quantidade);
  }

  const totalDeCobaias = totais.C + totais.R + totais.S;

  console.log(`Total: ${totalDeCobaias} cobaias`);
  console.log(`Total de coelhos: ${totais.C}`);
  console.log(`Total de ratos: ${totais.R}`);
  console.log(`Total de sapos: ${totais.S}`);
  console.log(`Percentual de coelhos: ${retornaPercentual(totais.C, totalDeCobaias)}`);
  console.log(`Percentual de ratos: ${retornaPercentual(totais.R, totalDeCobaias)}`);
  console.log(`Percentual de sapos: ${retornaPercentual(totais.S, totalDeCobaias)}`);
}

//Exemplo entrada:
const lines = [
  "10",
  "10 C",
  "6 R",
  "15 S",
  "5 C",
  "14 R",
  "9 C",
  "6 R",
  "8 S",
  "5 C",
  "14 R",
];

retornaQtdEPercentualCobaias(lines);
