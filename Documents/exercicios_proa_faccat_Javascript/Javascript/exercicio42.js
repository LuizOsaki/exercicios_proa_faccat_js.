let codigo = prompt("Digite o código do empregado:");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));

let anoAtual = new Date().getFullYear(); // ano atual automático
let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;

let requerer;

if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
  requerer = "Requerer aposentadoria";
} else {
  requerer = "Não requerer";
}

alert("Código: " + codigo +
      "\nIdade: " + idade +
      "\nTempo de trabalho: " + tempoTrabalho +
      "\nSituação: " + requerer);