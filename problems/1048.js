// A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

// Salário: 0 - 400.00 | Percentual de Reajuste:  15%
// Salário: 400.01 - 800.00 | Percentual de Reajuste:  12%
// Salário: 800.01 - 1200.00 | Percentual de Reajuste:  10%
// Salário: 1200.01 - 2000.00 | Percentual de Reajuste:  7%
// Salário: Acima de 2000.00 | Percentual de Reajuste:  4%

// Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

// Entrada: A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
// Saída: Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste 
//(ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

function calculaReajusteSalario(lines) {
    const salarioAtual = parseFloat(lines[0]);

    const faixasReajuste = [
        {limite: 400, percentual: 0.15},
        {limite: 800, percentual: 0.12},
        {limite: 1200, percentual: 0.10},
        {limite: 2000, percentual: 0.07},
        {limite: Infinity, percentual: 0.04},
    ]

    const faixa = faixasReajuste.find(f => salarioAtual <= f.limite); 

    const reajuste = salarioAtual * faixa.percentual;
    const novoSalario = salarioAtual + reajuste;

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log(`Em percentual: ${Math.round(faixa.percentual * 100)} %`);
}

//exemplo de entrada:
calculaReajusteSalario(["800.01"]);