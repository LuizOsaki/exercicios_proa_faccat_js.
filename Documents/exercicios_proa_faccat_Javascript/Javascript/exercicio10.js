let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

let percentualDistribuidor = 0.28;
let impostos = 0.45;

let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * impostos);

alert("O custo final ao consumidor é: R$ " + custoFinal.toFixed(2));