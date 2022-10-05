async function myGet(url)
{
    let options = {
        method: 'GET',
        credentials: 'include',
        cache: "no-store"
    }

    console.log(url);   
    const response = await fetch(url,options);
    const result = await response.json();
    
    console.log(result);

    return result;
}

async function auth()
{
    let form = document.querySelector('form');
    let params = new URLSearchParams(new FormData(form)).toString()
    let url = 'http://localhost:3000/auth?'+params;
    let result = await myGet(url);

    console.log(typeof result)

    if ( result == true)
    {
        alert('Login efetuado com sucesso!');
        window.location = window.location;
    }
    else
    {
        alert('Falha no login verifique dados digitados!');
    }

    return false;
}

async function out()
{
    let result = await myGet('http://localhost:3000/out');
    return false;
}

async function verify()
{
    let result = await myGet('http://localhost:3000/verify');

    if ( result.loggedIn == 'true')
    {
        document.body.innerHTML = 'Bem vindo, ' +result.userName + " <a href='/login.html' onclick='out()'>Sair</a>";
    }
}

verify();