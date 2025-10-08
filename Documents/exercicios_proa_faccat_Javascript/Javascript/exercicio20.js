let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
  alert("Valores em ordem crescente: " + valor1 + ", " + valor2);
} else {
  alert("Valores em ordem crescente: " + valor2 + ", " + valor1);
}