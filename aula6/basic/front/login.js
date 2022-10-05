const api = "http://localhost:3000/";

async function auths() {

    let formData = new getFormData();

    console.log(formData)

    let headers = new Headers({
        username: formData.username,
        password: formData.password
    });

    // let headers = new Headers({
    //     username: "tcharlesdavilassen@gmail.com",
    //     password: "123456"
    // });


    let options = {
        headers: headers,
        method: "GET",
        cache: "no-store"
    }

    let url = api + 'auth';
    const response = await fetch(url, options);
    const result = await response.json();


    if (result != null) {
        localStorage.setItem("logado", JSON.stringify(result));
        window.location = window.location;
        alert("logado");

    } else {

        alert("Não conseguiu logar")

    }

    console.log("Aqui result");
    console.log(result);
}

async function verify() {

    let logado = JSON.parse(localStorage.getItem("logado"));

    console.log(logado)

    if (logado == null) {
        return
    }

    let headers = new Headers({
        username: logado.email,
        password: logado.password
    });


    let options = {
        headers: headers,
        method: "GET",
        cache: "no-store"
    }

    let url = api + "verify";

    const response = await fetch(url, options);
    const result = await response.json();

    console.log("Usuarios  aaaaaaa")
    console.log(result)

    if (result == null) {
        console.log("aaaaaaaaaaaaaa")
        document.body.innerHTML = "Bem vindo, " + logado.nome;

        document.body.innerHTML += "<br />";
        document.body.innerHTML += "<a href= '/login.html' onclick='out()'> Sair </a>";

    }

}

verify();

function out() {
    localStorage.removeItem("logado");
    window.location.reload();
}


function getFormData() {
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let dados = Object.fromEntries(formData);

    return dados;
}
