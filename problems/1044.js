// Leia 2 valores inteiros (A e B). 
// Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

function verificaMultiplos(lines){
    const [valorA, valorB] = lines[0].split(" ").map(Number);

    if (Number.isInteger(valorA / valorB) || Number.isInteger(valorB / valorA)){
        console.log("Sao Multiplos");
    } else {
        console.log("Nao sao Multiplos");
    }
}

//exemplo de entrada:
verificaMultiplos(["6 25"])