//Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

function idadeEmDias(lines) {
  const diasTotais = lines[0];

  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor((diasTotais % 365) / 30);
  const dias = Math.floor((diasTotais % 365) % 30);

  console.log(`${anos} ano(s)`);
  console.log(`${meses} mes(es)`);
  console.log(`${dias} dia(s)`);
}

//exemplo de entrada:
idadeEmDias([400]);
