let a = parseFloat(prompt("Digite o primeiro valor: "));
let b = parseFloat(prompt("Digite o segundo valor: "));
let c = parseFloat(prompt("Digite o terceiro valor: "));

let maior;

if (a > b && a > c) {
  maior = a;
} else if (b > c) {
  maior = b;
} else {
  maior = c;
}

alert("O maior valor é: " + maior);