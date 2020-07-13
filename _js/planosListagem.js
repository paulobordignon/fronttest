const url = 'https://my-proposta.azurewebsites.net/v1/planos';
var gridPlanos = document.getElementById('gridPlanos');
var linhaSelecionada = "";

fetch(url).then(response => {
    return response.json();
}).then(jsonBody => {
    console.log(jsonBody);
    const html = jsonBody.map(plano =>{
        return `
            <tr onclick="obterID(this)">
                <td><span>ID:</span>${plano.id}</td>
                <td><span>Nome:</span>${plano.nome}</td>
                <td><span>Horas:</span>${plano.horas}</td>
                <td><span>Preço:</span>${plano.preco}</td>
                <td><span>Ativo:</span>${plano.ativo}</td>
                <td><span>Opções:</span><a onClick="editar(this)">Editar</a> <a onClick="excluir(this)">Excluir</a></td>
            </tr>
        `
    }).join("");
    gridPlanos.insertAdjacentHTML("afterbegin", html);
}).catch(error => console.error('Ocorreu o seguinte erro:', error));

function adicionar(){
    location.href="planosCadastro.html"
}

function obterID(e){
    linhaSelecionada = (e.children[0].innerHTML);  
}

function editar(){

    if (!linhaSelecionada){
        alert("Selecione a linha que deseja editar");
        window.location.reload();
    }else{  
        window.location.href = ("planosCadastro.html#" + linhaSelecionada);
    }

}

function excluir(){

    if (!linhaSelecionada){
        alert("Selecione a linha que deseja editar");
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

            fetch(url, {
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