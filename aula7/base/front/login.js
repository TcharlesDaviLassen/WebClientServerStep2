const api = "http://localhost:3000/";

async function auths() {

    let formData = getFormData();

    let authorization = formData.username + ":" + formData.password;
    let base64 = btoa(authorization);


    let headers = new Headers({
        authorization: "Basic" + base64,
    });


    let options = {
        headers: headers,
        method: 'GET',
        cache: "no-store"
    }

    let url = api + 'auth';
    const response = await fetch(url, options);
    const usuario = await response.json();

    if (usuario == null) {

        alert("Não rolou filho! Tente novamente mais tarde!");

    } else {

        setLogado(usuario);
        window.location.reload();
        alert("Logado");
    }

    console.log(usuario);
}


function setLogado(usuario) {
    localStorage.setItem("logado", JSON.stringify(usuario));
    return true;
}


function getLogado() {
    return JSON.parse(localStorage.getItem('logado'))
}


async function verify() {

    let logado = getLogado();

    console.log(logado)

    if (logado == null) {

        return
    }

    let authorization = logado.email + ":" + logado.senha;
    let base64 = btoa(authorization);

    let headers = new Headers({
        authorization: "Basic" + base64
    });

    console.log("Headers")
    console.log(headers)

    let options = {
        headers: headers,
        method: 'GET',
        cache: "no-store"
    }

    console.log("Options")
    console.log(options)


    let url = api + 'verify';
    const response = await fetch(url, options);
    const usuario = await response.json();

    if (usuario) {
        document.body.innerHTML = "Bem vindo, " + logado.nome;
        document.body.innerHTML += "<br/>";
        document.body.innerHTML += " <a href='/login.html' onclick='out()'>Sair</a>";
    }
}

//Exclui o COOKIE criado quando sair da página
function out() {
    localStorage.removeItem('logado');
}

//Pega todos os dados do formulário do HTML
function getFormData() {
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let dados = Object.fromEntries(formData)
    return dados;
}

verify();

