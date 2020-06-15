/*const apiclientes = fetch("https://economia.awesomeapi.com.br/all")
    .then(response => {
        return response.json();
    })
    .then(json => {
        document.querySelector("#nomefantasia").innerHTML = json[0].name;
        console.log(json);
    });

console.log(apiclientes);

var nome = "teste";
var cnpj= "123";
var razaoSocial = "ttesds";
var telefone = "123123";
var email = "sadads@gmail.com";

const urlclientes = 'https://my-proposta.azurewebsites.net/v1/clientes';
const urlvendedores = 'http://my-proposta.azurewebsites.net/v1/vendedores';
const urlplanos = 'http://my-proposta.azurewebsites.net/v1/planos';
*/

const dadoscliente = {
    nome: "nomefantasia",
    cnpj: "1213",
    razaoSocial: "teste",
    telefone: "123123",
    email: "asdasd@gmail.com"
}

fetch("https://my-proposta.azurewebsites.net/v1/clientes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dadoscliente)
});

/*
const cadastrarcliente = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadoscliente)
};

fetch('/api',cadastrarcliente);
*/