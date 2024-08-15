// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. 
// A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

//se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
//se A² = B² + C², apresente a mensagem: TRIANGULO RETANGULO
//se A² > B² + C², apresente a mensagem: TRIANGULO OBTUSANGULO
//se A² < B² + C², apresente a mensagem: TRIANGULO ACUTANGULO
//se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
//se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES


function retornaTipoTriangulo(lines) {
    const [valorA, valorB, valorC ] = lines[0].split(" ").map(Number).sort((a, b) => b - a);

    if (valorA >= (valorB + valorC)){
        console.log("NAO FORMA TRIANGULO");
        return;
    } 

    const valorA2 = Math.pow(valorA, 2);
    const valorB2MaisC2 = Math.pow(valorB, 2) + Math.pow(valorC, 2);

    if (valorA2 === valorB2MaisC2) {
        console.log("TRIANGULO RETANGULO");
    } else if (valorA2 > valorB2MaisC2) {
        console.log("TRIANGULO OBTUSANGULO");
    } else if (valorA2 < valorB2MaisC2) {
        console.log("TRIANGULO ACUTANGULO");
    }
    
    if ((valorA === valorB) && (valorA === valorC)) {
        console.log("TRIANGULO EQUILATERO");
    } else if((valorA === valorB) || (valorA === valorC) || (valorB === valorC)){
        console.log("TRIANGULO ISOSCELES");
    }
}

//exemplo de entrada:
retornaTipoTriangulo(["6.0 6.0 6.0"]);