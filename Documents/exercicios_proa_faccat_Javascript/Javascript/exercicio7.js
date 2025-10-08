const anos = parseInt(prompt("Digite a idade em anos:"));
const meses = parseInt(prompt("Digite os meses:"));
const dias = parseInt(prompt("Digite os dias:"));

function idadeEmDias(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias;
}

const totalDias = idadeEmDias(anos, meses, dias);
alert("A idade em dias é: " + totalDias);
