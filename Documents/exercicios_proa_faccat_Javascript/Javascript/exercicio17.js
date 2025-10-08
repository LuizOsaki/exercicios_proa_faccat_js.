let nota1 = parseFloat(prompt("Digite a 1ª nota: "));
let nota2 = parseFloat(prompt("Digite a 2ª nota: "));

let media = (nota1 + nota2) / 2;

if (media >= 6) {
  alert("Aluno aprovado! Média: " + media.toFixed(2));
} else {
  alert("Aluno reprovado. Média: " + media.toFixed(2));
}