// Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês.
// O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.
// Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

// Entrada:
// Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar.
// Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss.
// Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

// Saída:
// Na saída, deve ser apresentada a duração do evento, no seguinte formato:
// W dia(s)
// X hora(s)
// Y minuto(s)
// Z segundo(s)

// Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.

function calculaDuracaoEvento(lines) {
  let [diaInicial, horarioInicial, diaFinal, horarioFinal] = lines.map(
    (item) => {
      if (item.startsWith("Dia")) {
        return item.split(" ")[1];
      }

      return item.split(" : ").map(Number);
    }
  );

  const inicio = new Date(
    Date.UTC(
      2024,
      3,
      diaInicial,
      horarioInicial[0],
      horarioInicial[1],
      horarioInicial[2]
    )
  );

  const final = new Date(
    Date.UTC(
      2024,
      3,
      diaFinal,
      horarioFinal[0],
      horarioFinal[1],
      horarioFinal[2]
    )
  );

  const total = new Date(final - inicio);

  console.log(`${total.getUTCDate() - 1} dia(s)`);
  console.log(`${total.getUTCHours()} hora(s)`);
  console.log(`${total.getUTCMinutes()} minuto(s)`);
  console.log(`${total.getUTCSeconds()} segundo(s)`);
}

// Exemplo de entrada:
const lines = ["Dia 5", "08 : 12 : 23", "Dia 9", "06 : 13 : 23"];
calculaDuracaoEvento(lines);
