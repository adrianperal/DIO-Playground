console.log("TypeScript");
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));
var animal = {
    nome: "Rex",
    tipo: "terrestre",
    raca: "Labrador"
};
//console.log(animal.roar(50));
var felino = {
    nome: "Papito",
    tipo: "terrestre",
    visaoNoturna: true,
    raca: "Labrador"
};
var input = document.getElementById("input");
input.addEventListener("input", function (event) {
    var i = event.currentTarget;
    console.log(i.value);
});
