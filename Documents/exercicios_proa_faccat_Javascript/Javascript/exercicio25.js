let numeroConta = prompt("Digite o número da conta: ");
let saldo = parseFloat(prompt("Digite o saldo atual: "));
let debito = parseFloat(prompt("Digite o valor do débito: "));
let credito = parseFloat(prompt("Digite o valor do crédito: "));

let saldoAtual = saldo - debito + credito;

let status = saldoAtual >= 0 ? "Saldo Positivo" : "Saldo Negativo";

alert("Conta: " + numeroConta + "\nSaldo Atual: R$ " + saldoAtual.toFixed(2) + "\n" + status);