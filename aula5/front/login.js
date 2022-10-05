const api = "http://localhost:3000/";

//TODO arguma coisa com cache 
const fetchOptions = {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
}

async function auths() {

    //De forma inserindo os dados de forma manual
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value;
    // console.log("auths");
    // let params = 'username='+username+'&password='+password
    // URLSearchParams Converte os dados, convertendo paramentro GET em STRING


    let form = document.querySelector('form');
    let params = new URLSearchParams(new FormData(form)).toString()

    let url = api + "auth/?" + params;
    console.log(url);


    const response = await fetch(url, fetchOptions)
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    // console.log(response)
    const result = await response.json();


    if (result == true) {
        alert("Logado");
        window.location = window.location;
    } else {
        alert("Proplemas ao fazer o log")
    }

    console.log(result);

}


async function verify() {

    let url = api + "verify";

    const response = await fetch(url, fetchOptions);
    console.log("Aqui é response");
    console.log(response);

    const result = await response.json();
    console.log("Aqui é result");
    console.log(result);

    console.log("Dados")
    console.log(result.loggedIn)
    console.log(result.username)
    
    if (result.loggedIn != "undefined") {

        document.body.innerHTML = "Bem vindo " + result.username;

        document.body.innerHTML += "<br />";
        document.body.innerHTML += "<a href= '/login.html' onclick='out()'> Sair </a>";
    }

}

verify();



async function out() {


    if (confirm("Confirmar saida")) {

        let url = api + "out";
        const response = await fetch(url, fetchOptions);
        await response.json();

        window.location.reload();
    }

}