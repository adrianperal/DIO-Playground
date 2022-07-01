// var and const
var preco = 5;
const DESCONTO = 0.2;

preco = preco - DESCONTO;

// functions

function soma(a, b) {
  return a + b;
}

console.log(soma(1, 2));

function returnEvenValues(array) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = returnEvenValues(numbers);
console.log(evenNumbers);

//access DOM
