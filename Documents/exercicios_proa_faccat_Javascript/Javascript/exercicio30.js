let a = parseFloat(prompt("Digite o primeiro valor: "));
let b = parseFloat(prompt("Digite o segundo valor: "));
let c = parseFloat(prompt("Digite o terceiro valor: "));

let numeros = [a, b, c];
numeros.sort(function(x, y) {
  return x - y;
});

alert("Valores em ordem crescente: " + numeros.join(", "));