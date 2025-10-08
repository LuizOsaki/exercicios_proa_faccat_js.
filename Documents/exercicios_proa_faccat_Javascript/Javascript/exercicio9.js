let salarioAtual = parseFloat(prompt("Digite o salário atual: "));
let percentual = parseFloat(prompt("Digite o percentual de reajuste (%): "));

let novoSalario = salarioAtual + (salarioAtual * percentual / 100);

alert("O novo salário é: R$ " + novoSalario.toFixed(2));