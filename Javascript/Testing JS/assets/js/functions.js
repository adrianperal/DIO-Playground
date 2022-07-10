function showAge(name, age) {
  return `${name}'s age is ${age} years old.`;
}

function showCity(name, city) {
  return `${name}'s hometown is ${city} city.`;
}

function showHobby(name, hobby) {
  return `${name}'s hobby is ${hobby}, and loves doing that!.`;
}

export const addFunc = function (a, b) {
  //function stored in (var,let,const)
  return a + b;
};

// inmediate anon. func. declaration stored in variable
const addAnonFunc = (function (a, b) {
  return a + b;
})(1, 2);

// callback funtions passed as arguments
const calc = function (op, num1, num2) {
  return op(num1, num2);
};

const soma = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

// spred

function addingArgs(a, b, c) {
  return a + b + c;
}
console.log(addingArgs(1, 2, 3));

addingArgs(...[1, 2, 3]);

// rest

function sumArgs(...args) {
  return console.log(args.length);
}
sumArgs(); // 0
sumArgs([2, "z"], 6, 1, "a", 2153, true); // 6
sumArgs(1, 2, 3); // 3

// object destructuring

const user = {
  id: 42,
  displayName: "John",
  fullName: {
    first: "John",
    last: "Doe",
  },
};

function userId(id) {
  return id; // destructuring
}

function getFullName({ fullName: { first, last } }) {
  return `${first} ${last}`;
} // destructuring

userId(user); // 42

getFullName(user); // "John Doe"

// for loops (in n of)

for (let prop in user) {
  console.log(prop);
}

for (let prop in user) {
  console.log(user[prop]);
}

let array = [1, 2, 3, 4, 5];
for (let item of array) {
  console.log(item);
}

// this keyword implementation
const pessoa = {
  firstName: "John",
  lastName: "Doe",
  id: 30,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getId: function () {
    return this.id;
  },
}; // this is the object

pessoa.fullName();
// "John Doe"
pessoa.getId();
// 30

// .call
function getSomething() {
  console.log(this.id);
}
getSomething.call(pessoa); // 30
getSomething.call(user); // 42

//arrow functions
const doSometning = (a, b) => a + b;
doSometning(1, 2); // 3

//exporting functions

export { showAge, showCity, showHobby};
