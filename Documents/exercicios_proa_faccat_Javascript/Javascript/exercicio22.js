let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas no mês: "));
let salarioHora = parseFloat(prompt("Digite o valor do salário por hora: "));

let horasNormais = 160; // 40 horas por semana * 4 semanas
let salarioTotal;

if (horasTrabalhadas <= horasNormais) {
  salarioTotal = horasTrabalhadas * salarioHora;
} else {
  let horasExtras = horasTrabalhadas - horasNormais;
  let valorExtras = horasExtras * (salarioHora * 1.5);
  salarioTotal = (horasNormais * salarioHora) + valorExtras;
}

alert("Salário total no mês: R$ " + salarioTotal.toFixed(2));