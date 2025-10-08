let carrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
let totalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
let salarioFixo = parseFloat(prompt("Digite o salário fixo: "));
let valorPorCarro = parseFloat(prompt("Digite o valor recebido por carro vendido: "));

let comissaoFixa = carrosVendidos * valorPorCarro;
let comissaoPercentual = totalVendas * 0.05;
let salarioFinal = salarioFixo + comissaoFixa + comissaoPercentual;

alert("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));