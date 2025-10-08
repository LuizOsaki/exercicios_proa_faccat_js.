let nota1 = parseFloat(prompt("Digite a 1ª nota: "));
let nota2 = parseFloat(prompt("Digite a 2ª nota: "));
let nota3 = parseFloat(prompt("Digite a 3ª nota: "));

let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

alert("A média final é: " + media.toFixed(2));