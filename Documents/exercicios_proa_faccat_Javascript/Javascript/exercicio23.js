let nome = prompt("Digite seu nome:");
let altura = parseFloat(prompt("Digite sua altura (em metros): "));
let sexo = prompt("Digite seu sexo (M ou F): ").toUpperCase();

let pesoIdeal;

if (sexo === "M") {
  pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F") {
  pesoIdeal = (62.1 * altura) - 44.7;
} else {
  alert("Sexo inválido!");
}

if (pesoIdeal) {
  alert(nome + ", seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}