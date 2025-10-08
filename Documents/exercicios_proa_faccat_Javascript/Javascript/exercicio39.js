let A = true;
let B = true;
let C = false;

let resultadoA = (A && B) || (A ^ B); // ^ é bitwise xor (não ideal para lógica booleana)
let resultadoB = (A || B) && (A && C);
let resultadoC = A || (C && B) ^ (A && !B); // cuidado com precedência e ^

alert(
  "a) (A e B) ou (A xou B): " + resultadoA +
  "\nb) (A ou B) e (A e C): " + resultadoB +
  "\nc) A ou C e B xou A e não B: " + resultadoC
);