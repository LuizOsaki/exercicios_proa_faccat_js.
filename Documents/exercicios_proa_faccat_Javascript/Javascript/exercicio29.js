let a = parseFloat(prompt("Digite o primeiro valor: "));
let b = parseFloat(prompt("Digite o segundo valor: "));
let c = parseFloat(prompt("Digite o terceiro valor: "));

let menor;

if (a < b && a < c) {
  menor = a;
} else if (b < c) {
  menor = b;
} else {
  menor = c;
}

let soma = a + b + c - menor;

alert("A soma dos dois maiores valores é: " + soma);