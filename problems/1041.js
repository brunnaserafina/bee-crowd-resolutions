// Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. 
// A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

function retornaQuadrantePonto(lines) {
    const [valorX, valorY] = lines[0].split(" ").map(Number);

    if (valorX === 0 && valorY === 0) {
        console.log("Origem");
    } else if (valorX === 0) {
        console.log("Eixo Y");
    } else if (valorY === 0) {
        console.log("Eixo X");
    } else if (valorX > 0 && valorY > 0) {
        console.log("Q1");
    } else if (valorX < 0 && valorY > 0) {
        console.log("Q2");
    } else if (valorX < 0 && valorY < 0) {
        console.log("Q3");
    } else if (valorX > 0 && valorY < 0) {
        console.log("Q4");
    }
}

//exemplo de entrada:
retornaQuadrantePonto(["4.5 -2.2"]);