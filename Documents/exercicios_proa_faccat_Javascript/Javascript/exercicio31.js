let a = parseFloat(prompt("Digite o valor do lado A: "));
let b = parseFloat(prompt("Digite o valor do lado B: "));
let c = parseFloat(prompt("Digite o valor do lado C: "));

if (a < b + c && b < a + c && c < a + b) {
  alert("É possível formar um triângulo.");
} else {
  alert("Não é possível formar um triângulo.");
}