const urlclientes = 'https://my-proposta.azurewebsites.net/v1/clientes';
var gridClientes = document.getElementById('gridClientes');
var linhas = document.getElementById("tabela").getElementsByTagName("tr");
var linhaSelecionada = "";
var tabela = document.getElementById("tabela");

fetch(urlclientes).then(response => {
    return response.json();
}).then(jsonBody => {
    console.log(jsonBody);
    const html = jsonBody.map(user =>{
        return `
            <tr>
                <td><span>ID:</span>${user.id}</td>
                <td><span>Nome:</span>${user.nome}</td>
                <td><span>Razão:</span>${user.razaoSocial}</td>
                <td><span>CNPJ:</span>${user.cnpj}</td>
                <td><span>Fone:</span>${user.telefone}</td>
                <td><span>Email:</span> ${user.email}</td>
            </tr>
        `
    }).join("");
    gridClientes.insertAdjacentHTML("afterbegin", html);
}).catch(error => console.error('Ocorreu o seguinte erro:', error));

function adicionar(){
    location.href="clientesCadastro.html"
}

tabela.addEventListener("click", function(){

    for(var i = 0; i < linhas.length; i++){
        var linha = linhas[i];
        linha.addEventListener("click", function(){
            var linhasf = this.parentElement.getElementsByTagName("tr");
            for(var i = 0; i < linhasf.length; i++){
                var linha_ = linhasf[i];
                linha_.classList.remove("selecionado");    
            }
            this.classList.add("selecionado");
        });
    }

});

function obtemLinhaSelecionada(){
    
    var selecionados = document.getElementById("tabela").getElementsByClassName("selecionado");
    
    for(var i = 0; i < selecionados.length; i++){
        var selecionado = selecionados[i];
        selecionado = selecionado.getElementsByTagName("td");
        linhaSelecionada = selecionado[0].innerHTML;
    }

}

function editar(){

    obtemLinhaSelecionada();

    if (!linhaSelecionada){
        alert("Pressione dois cliques no cliente que deseja editar");
        window.location.reload();
    }else{  
        window.location.href = ("clientesCadastro.html#" + linhaSelecionada);
    }

}

function excluir(){

    obtemLinhaSelecionada();

    if (!linhaSelecionada){
        alert("Pressione dois cliques no cliente que deseja excluir");
        window.location.reload();
    }else{   
        var retorno = confirm("Deseja realmente Excluir esse registro?");
        if (retorno == true){

            var separaID = linhaSelecionada.split(">");
            var idExclusao = separaID[2];
            var idSelecionado = Number(idExclusao);

            const dadosExclusao = {
                id: idSelecionado
            }

            fetch(urlclientes, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosExclusao)
            }).then(response=> {
                return response.json();
            }).then(({ message }) => {
                alert(message);
                window.location.reload();
            }).catch(error => console.error('Ocorreu o seguinte erro:', error));
        }else{
            window.location.reload();
        }
    }
}