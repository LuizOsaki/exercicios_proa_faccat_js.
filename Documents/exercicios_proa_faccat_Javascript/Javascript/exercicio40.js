let nomeProduto = prompt("Digite o nome do produto:");
let quantidade = parseInt(prompt("Digite a quantidade adquirida:"));
let precoUnitario = parseFloat(prompt("Digite o preço unitário:"));

let total = quantidade * precoUnitario;
let desconto;

if (quantidade <= 5) {
  desconto = total * 0.02;
} else if (quantidade <= 10) {
  desconto = total * 0.03;
} else {
  desconto = total * 0.05;
}
let totalPagar = total - desconto;

alert("Produto: " + nomeProduto +
      "\nTotal: R$ " + total.toFixed(2) +
      "\nDesconto: R$ " + desconto.toFixed(2) +
      "\nTotal a pagar: R$ " + totalPagar.toFixed(2));