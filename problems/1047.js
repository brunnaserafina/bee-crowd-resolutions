// Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.
// Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

// Entrada: Quatro números inteiros representando a hora de início e fim do jogo.
// Saída: Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

function calculaDuracaoJogo(lines){
    const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(" ").map(Number);

    let duracaoHoras = horaFinal - horaInicial;
    let duracaoMinutos = minutoFinal - minutoInicial;

    if (duracaoMinutos < 0){
        duracaoMinutos += 60;
        duracaoHoras -= 1;
    }

    if (duracaoHoras < 0){
        duracaoHoras += 24;
    }

    if (duracaoHoras === 0 && duracaoMinutos === 0){
        duracaoHoras = 24;
    }

    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`);
}

//exemplo de entrada:
calculaDuracaoJogo(["22 30 1 45"]);