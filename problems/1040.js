function calcularMediaAluno(lines) {
    const [n1, n2, n3, n4] = lines[0].split(" ");

    const media = ((n1 * 2.0) + (n2 * 3.0) + (n3 * 4.0) + (n4 * 1.0)) / 10;
    
    console.log("Media:", media.toFixed(1))
    
    if (media >= 7) {
        console.log("Aluno aprovado.");
    } else if (media < 5) {
        console.log("Aluno reprovado.");
    } else {
        console.log("Aluno em exame.");
        
        const n5  = lines[1].split(" ");
    
        console.log("Nota do exame:", Number(n5).toFixed(1));
    
        const mediaFinal = (media + Number(n5)) / 2;
    
        if (mediaFinal >= 5) {
            console.log("Aluno aprovado.");
        } else {
            console.log("Aluno reprovado.");
        }
    
        console.log("Media final:", mediaFinal.toFixed(1));
    }
}

//entrada:
calcularMediaAluno(["2.0 4.0 7.5 8.0", "6.4"])