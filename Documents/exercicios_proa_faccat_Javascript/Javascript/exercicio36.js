let h1 = parseInt(prompt("Digite a idade do primeiro homem: "));
let h2 = parseInt(prompt("Digite a idade do segundo homem: "));
let m1 = parseInt(prompt("Digite a idade da primeira mulher: "));
let m2 = parseInt(prompt("Digite a idade da segunda mulher: "));

let homemMaisVelho = h1 > h2 ? h1 : h2;
let homemMaisNovo = h1 < h2 ? h1 : h2;
let mulherMaisVelha = m1 > m2 ? m1 : m2;
let mulherMaisNova = m1 < m2 ? m1 : m2;

let soma = homemMaisVelho + mulherMaisNova;
let produto = homemMaisNovo * mulherMaisVelha;

alert("Soma das idades do homem mais velho com a mulher mais nova: " + soma);
alert("Produto das idades do homem mais novo com a mulher mais velha: " + produto);