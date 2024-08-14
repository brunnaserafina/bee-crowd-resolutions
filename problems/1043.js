// Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo.
// Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem: Perimetro = XX.X
// Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem: Area = XX.X

// A entrada contém três valores reais.
// O resultado deve ser apresentado com uma casa decimal.

function validaTriangulo(lines){
    const [ladoA, ladoB, ladoC] = lines[0].split(" ").map(Number);
    const isTriangulo = ((ladoA + ladoB) > ladoC) && ((ladoB + ladoC) > ladoA) && ((ladoA + ladoC) > ladoB);

    if (isTriangulo) {
        const perimetro = ladoA + ladoB + ladoC;
        console.log(`Perimetro = ${perimetro.toFixed(1)}`);
    } else {
        const area = ((ladoA + ladoB) * ladoC) / 2;
        console.log(`Area = ${area.toFixed(1)}`);
    }
}

//exemplo de entrada:
validaTriangulo(["6.0 4.0 2.1"])