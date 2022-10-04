function montNome( nome: String, sobrenome: String, nomeMeio?: String)
{
    console.log(nome,sobrenome, nomeMeio);
}

montNome("Jonh", 'tommy',)


function monNomes( nome: String, sobrenome: String, nomeMeio?: String)
{
    console.log('Oi ' + nome.toUpperCase() + " " + nomeMeio?.toLocaleUpperCase() + " " + sobrenome.toUpperCase() + "!")
}


monNomes("Jonh", " " , 'tommy')