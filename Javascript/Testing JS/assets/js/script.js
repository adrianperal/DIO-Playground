// arrays & objects exercise

let someArray = [1, true, "free", [1, "b", false], 4];
console.log(someArray);
someArray.forEach((element, i) => {
  console.log(`index ${i} is ${element}`);
});

someArray.splice(1, 3);
console.log(someArray);

console.log("----------");

let objeto = {
  number: 1,
  boolean: true,
  string: "free",
  array: [1, "b", false],
};

let number = 22;
objeto.number = number;
console.log(objeto);

// Palindrome exercise
console.log("----------");
function isPalindrome(string) {
  if (!string) return "invalid string";

  return string.split("").reverse().join("") === string;
}

function isPalindrome2(string) {
  if (!string) return "invalid string";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
/* 
let string = prompt("Inserir palavra: ");
let result = isPalindrome(string);
alert(`Palindrome Result: ${result}`); */

console.log(isPalindrome2("anana"));
console.log("----------");
// array working exercise

let array = [4, 8, 15, 16, 23, 42];
console.log(array);
function replaceEvens(array) {
  if (array.length == 0) {
    return -1;
  }

  /* for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
      array[i] = 0;
    }
  } */

  array.forEach((element, index) => {
    if (element % 2 == 0) {
      array[index] = 0;
    }
  });

  return array;
}

array = replaceEvens(array);
console.log(array);

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 7.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
  { nome: "Bruna", nota: 6.9, bolsista: true },
  { nome: "Carlos", nota: 8.5, bolsista: false },
];

let alunosFormados = [];

function vaiColar(alunos, media) {
  for (let aluno of alunos) {
    const { nota, nome } = aluno;
    if (nota >= media) {
      alunosFormados.push(nome);
    }
  }
}

vaiColar(alunos, 8.0);
console.log(alunosFormados);

function caclulaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa = {
  nome: "João",
  idade: 20,
};

console.log(caclulaIdade.call(pessoa, 10));
console.log(caclulaIdade.apply(pessoa, [10]));
