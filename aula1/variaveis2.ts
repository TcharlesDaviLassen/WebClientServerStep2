
let nomes: string = "Jonh";
let idades: number = 30;

let nom: string[] = ['Jonhs', 'Mateus', 'Fabricio', 'Tommy'];

for (let i = 0; i < nom.length; i++) {
    const element = nom[i];
    console.log(element)
}

let criacao: Date = new Date();
let situacao: boolean = false;




console.log("Seu nome é " + nomes + ", e sua idade é " + idades)
console.log("Criação " + criacao.toISOString());
console.log("Situção " + situacao);
