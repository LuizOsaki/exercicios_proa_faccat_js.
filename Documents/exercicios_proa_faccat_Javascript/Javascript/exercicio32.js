let time1 = prompt("Digite o nome do primeiro time: ");
let gols1 = parseInt(prompt("Digite a quantidade de gols do " + time1 + ": "));

let time2 = prompt("Digite o nome do segundo time: ");
let gols2 = parseInt(prompt("Digite a quantidade de gols do " + time2 + ": "));

if (gols1 > gols2) {
  alert("Vencedor: " + time1);
} else if (gols2 > gols1) {
  alert("Vencedor: " + time2);
} else {
  alert("EMPATE");
}