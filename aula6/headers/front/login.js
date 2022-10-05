const api = "http://localhost:3000/";

async function auths() {
    let formData = getFormData();

    let headers = new Headers({
        username: formData.username,
        password: formData.password
    });

    let options = {
        headers: headers,
        method: 'GET',
        cache: "no-store"
    }

    let url = api + 'auth';
    const response = await fetch(url, options);
    const usuario = await response.json();

    if (usuario != null && usuario.id) {
        localStorage.setItem('logado', JSON.stringify(usuario));
        alert("Login efetuado com sucesso!")
        window.location.reload();
    } else {
        alert("Não rolou filho! Tente novamente mais tarde!");
    }

    console.log(usuario);
}

async function verify() {

    let logado = JSON.parse(localStorage.getItem('logado'));

    console.log(logado)

    if (logado == null) {
        
        return 
    }

    let headers = new Headers({
        username: logado.email,
        password: logado.senha
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













// async function auths() {

//     let formData = new getFormData();

//     console.log(formData)

//     let headers = new Headers({
//         username: formData.username,
//         password: formData.password
//     });

//     // let headers = new Headers({
//     //     username: "tcharlesdavilassen@gmail.com",
//     //     password: "123456"
//     // });


//     let options = {
//         headers: headers,
//         method: "GET",
//         cache: "no-store"
//     }

//     let url = api + 'auth';
//     const response = await fetch(url, options);
//     const result = await response.json();


//     if (result != null) {
//         localStorage.setItem("logado", JSON.stringify(result));
//         window.location = window.location;
//         alert("logado");

//     } else {

//         alert("Não conseguiu logar")

//     }

//     console.log("Aqui result");
//     console.log(result);
// }


// async function verify() {

//     let logado = JSON.parse(localStorage.getItem("logado"));

//     console.log(logado)

//     let headers = new Headers({
//         username: logado.email,
//         password: logado.password
//     });

//     if (logado == null) {
//         return
//     }

//     let options = {
//         headers: headers,
//         method: "GET",
//         cache: "no-store"
//     }

//     let url = api + "verify";

//     const response = await fetch(url, options);
//     const result = await response.json();
    
//     console.log("Usuarios  aaaaaaa")
//     console.log(result)
    

//     if (result ) {
//         console.log("aaaaaaaaaaaaaa")
//         document.body.innerHTML = "Bem vindo, " + logado.nome;

//         document.body.innerHTML += "<br />";
//         document.body.innerHTML += "<a href= '/login.html' onclick='out()'> Sair </a>";

//     }

// }


// function out() {
//     localStorage.removeItem("logado");
//     window.location.reload();
// }


// function getFormData() {
//     let form = document.querySelector('form');
//     let formData = new FormData(form);
//     let dados = Object.fromEntries(formData);
    
//     return dados;
// }

// verify();