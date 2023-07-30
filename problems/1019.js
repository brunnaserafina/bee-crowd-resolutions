//Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

function conversaoDeTempo(lines) {
  let segundos = lines[0];
  const horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  const minutos = Math.floor(segundos / 60);
  segundos %= 60;

  console.log(`${horas}:${minutos}:${segundos}`);
}

//exemplo de entrada:
conversaoDeTempo([140153]);
