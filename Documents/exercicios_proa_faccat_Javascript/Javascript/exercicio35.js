let litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));
let tipo = prompt("Digite o tipo de combustível (A - Álcool, G - Gasolina): ").toUpperCase();

let precoLitro, descontoPorLitro;

if (tipo === "A") {
  precoLitro = 2.90;
  descontoPorLitro = litros <= 20 ? 0.03 : 0.05;
} else if (tipo === "G") {
  precoLitro = 3.30;
  descontoPorLitro = litros <= 20 ? 0.04 : 0.06;
} else {
  alert("Tipo de combustível inválido!");
}

if (precoLitro) {
  let valorBruto = litros * precoLitro;
  let desconto = valorBruto * descontoPorLitro;
  let valorFinal = valorBruto - desconto;

  alert("Valor a ser pago: R$ " + valorFinal.toFixed(2));
}