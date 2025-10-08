let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 === num2) {
  alert("Números iguais");
} else if (num1 > num2) {
  alert("Primeiro é maior");
} else {
  alert("Segundo maior");
}