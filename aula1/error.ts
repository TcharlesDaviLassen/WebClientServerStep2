const error = {
    nome: "Jonh",
    idade: 300
}


console.log(error);

function jog()
{
    return Math.random() * 100 > 90 ? 60 : 30;
}

let resultado = jog();

console.log(resultado)