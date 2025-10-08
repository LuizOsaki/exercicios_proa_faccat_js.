let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
let preco = quantidade < 12 ? 1.30 : 1.00;

let total = quantidade * preco;

alert("O custo total da compra é: R$ " + total.toFixed(2));