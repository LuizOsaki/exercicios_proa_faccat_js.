let kgMorango = parseFloat(prompt("Digite a quantidade de morangos (kg):"));
let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs (kg):"));

let precoMorango = (kgMorango <= 5) ? 2.50 : 2.20;
let precoMaca = (kgMaca <= 5) ? 1.80 : 1.50;

let totalKg = kgMorango + kgMaca;
let total = (kgMorango * precoMorango) + (kgMaca * precoMaca);

if (totalKg > 8 || total > 25) {
  total *= 0.9; // desconto de 10%
}

alert("Valor a pagar: R$ " + total.toFixed(2));