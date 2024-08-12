// Leia 3 valores inteiros e ordene-os em ordem crescente. 
// No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

function sortSimples(lines){
    const listaNumeros = lines[0].split(" ").map(Number);
    const listaOrdenada = [...listaNumeros].sort((a, b) => a - b);

    listaOrdenada.forEach((item) => console.log(item));

    console.log("");

    listaNumeros.forEach((item) => console.log(item));

}

//exemplo de entrada:
sortSimples(["-14 21 7"]);
