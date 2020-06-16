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

const dadosCliente = {
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
    body: JSON.stringify(dadosCliente)
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

function popularTabela(){
    var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.length);
    cell0 = novaLinha.insertCell(0);
    cell0.innerHTML = "123";
    cell1 = novaLinha.insertCell(1);
    cell1.innerHTML = "nome fa";
    cell2 = novaLinha.insertCell(2);
    cell2.innerHTML = "razao";
    cell3 = novaLinha.insertCell(3);
    cell3.innerHTML = "cnpj";
    cell4 = novaLinha.insertCell(4);
    cell4.innerHTML = "ttelefone";
    cell5 = novaLinha.insertCell(5);
    cell5.innerHTML = "email";
    cell6 = novaLinha.insertCell(6);
    cell6.innerHTML = `<a onClick="editar(this)">Editar</a> <a onClick="deletar(this)">Deletar</a>`;
    return false;
}

function editar(){
    alert("editou");
}

function deletar(){
    alert("deletou");
}