const urlclientes = 'https://my-proposta.azurewebsites.net/v1/clientes';
var gridClientes = document.getElementById('gridClientes');

    fetch(urlclientes).then(response => {
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
                <td><a onClick="atualizarLinhaSelecionada(this)">Editar</a> <a onClick="excluir(this)">Excluir</a></td>
                </tr>
            `
    }).join("");
    gridClientes.insertAdjacentHTML("afterbegin", html);
    });

function adicionar(){
    location.href="clientesCadastro.html"
}

var linhas = document.getElementById("tabela").getElementsByTagName("tr");
var linhaSelecionada = "";

function atualizarLinhaSelecionada(){
    
    for(var i = 0; i < linhas.length; i++){
        var linha = linhas[i];
        linha.addEventListener("click", function(){
            this.classList.toggle("selecionado");
        });
    }

    var selecionados = document.getElementById("tabela").getElementsByClassName("selecionado");

    for(var i = 0; i < selecionados.length; i++){
        var selecionado = selecionados[i];
        selecionado = selecionado.getElementsByTagName("td");
        linhaSelecionada = selecionado[0].innerHTML ;
    }

}

function excluir(){

    atualizarLinhaSelecionada();

    console.log(linhaSelecionada);

    var numberLinhaSelecionada = Number(linhaSelecionada);

    const dadosExclusao = {
        id: numberLinhaSelecionada
    }

    fetch(urlclientes, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosExclusao)
    }).then(response=> {
        return response.json();
    }).then(json => {
        console.log(json);
    });

}