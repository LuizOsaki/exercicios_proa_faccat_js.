let horaInicio = parseInt(prompt("Digite a hora de início do jogo (0 a 23): "));
let horaFim = parseInt(prompt("Digite a hora de fim do jogo (0 a 23): "));

let duracao;

if (horaFim > horaInicio) {
  duracao = horaFim - horaInicio;
} else {
  duracao = (24 - horaInicio) + horaFim;
}

alert("A duração do jogo foi de " + duracao + " hora(s).");