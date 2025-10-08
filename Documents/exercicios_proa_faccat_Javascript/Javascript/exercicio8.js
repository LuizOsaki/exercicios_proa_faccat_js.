let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

let percBrancos = (votosBrancos / totalEleitores) * 100;
let percNulos = (votosNulos / totalEleitores) * 100;
let percValidos = (votosValidos / totalEleitores) * 100;

let mensagem = "Percentuais:\n" +
               "Brancos: " + percBrancos.toFixed(2) + "%\n" +
               "Nulos: " + percNulos.toFixed(2) + "%\n" +
               "Válidos: " + percValidos.toFixed(2) + "%";

alert(mensagem);