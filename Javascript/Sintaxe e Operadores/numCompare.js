let num1 = 2;
let num2 = 2;
let res;

function criarString(a, b) {
  let resposta = '';
  if (a === b) {
    resposta = `Os números ${a} e ${b} são iguais`;
  } else {
    resposta = `Os números ${a} e ${b} não são iguais`;
  }
  let soma = a + b;
  resposta = resposta + (`. Sua soma é ${soma}, `);
  if (soma < 10) {
    resposta = resposta + "que é menor que 10 e menor que 20.";
  } else if (soma < 20) {
    resposta = resposta + "que é maior que 10 e menor que 20.";
  } else {
    resposta = resposta + "que é maior que 10 e maior que 20.";
  }
  return resposta;
}

res = criarString(num1, num2);
console.log(res);