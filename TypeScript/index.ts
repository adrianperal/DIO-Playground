console.log("TypeScript");

function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(1, 2));

// types & interfaces

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquatico" | "voador";
  //roar(decivelNumber: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  raca: string;
}

type IFelinoOuCanino = IFelino | ICanino; // union type - not doing what expected?

const animal: IFelinoOuCanino = {
  nome: "Rex",
  tipo: "terrestre",
  raca: "Labrador",
  //roar: (decivelNumber) => `${animal.nome} roeu a ${decivelNumber}dB`,
};

//console.log(animal.roar(50));
const felino: IFelinoOuCanino = {
  nome: "Papito",
  tipo: "terrestre",
  visaoNoturna: true,
  raca: "Labrador", // ts não é deveria permitir?
  //roar: (decivelNumber) => `${felino.nome} roeu a ${decivelNumber}dB`,
};

// DOM with TS

const input = document.getElementById("input") as HTMLInputElement;
input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});
