const urlclientes = 'https://my-proposta.azurewebsites.net/v1/clientes';
var gridClientes = document.getElementById('gridClientes');

fetch(urlclientes
    ).then(response => {
        return response.json();
    }).then(jsonBody => {
        console.log(jsonBody);
        const html = jsonBody.map(user =>{
            return `
                <tr>
                <td>${user.id}</td>
                <td>${user.nome}</td>
                <td>${user.razaoSocial}</td>
                <td>${user.cnpj}</td>
                <td>${user.telefone}</td>
                <td>${user.email}</td>
                <td><a onClick="editar(this)">Editar</a> <a onClick="excluir(this)">Excluir</a></td>
                </tr>
            `
    }).join("");
    gridClientes.insertAdjacentHTML("afterbegin", html);
    });

function adicionar(){
    location.href="clientesCadastro.html"
}

function editar(){
    alert("editou");
}

function excluir(){

    const dadosCliente = {
        id: 4
    }

    fetch(urlclientes, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosCliente)
    }).then(response=> {
        return response.json();
    }).then(json => {
        console.log(json);
    });
    
}