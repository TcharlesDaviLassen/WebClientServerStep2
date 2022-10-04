class Usuarios {
    nome: string = "";
    idade: number = 0;
}

let jonh = new Usuarios();
jonh.nome = "Jonh";
jonh.idade = 300;

let tommy = new Usuarios();
tommy.nome = "tommy";
tommy.idade = 600;

let usuarios = new Array<Usuarios>();
usuarios.push(tommy)
usuarios.push(jonh)

console.log(usuarios)