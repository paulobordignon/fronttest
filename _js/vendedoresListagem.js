const urlVendedores = 'https://my-proposta.azurewebsites.net/v1/vendedores';
var gridVendedores = document.getElementById('gridVendedores');
var linhas = document.getElementById("tabela").getElementsByTagName("tr");
var linhaSelecionada = "";
var tabela = document.getElementById("tabela");

fetch(urlVendedores).then(response => {
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
            </tr>
        `
    }).join("");
    gridVendedores.insertAdjacentHTML("afterbegin", html);
});

function adicionar(){
    location.href="vendedoresCadastro.html"
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
        alert("Pressione dois cliques no vendedor que deseja editar");
        window.location.reload();
    }else{  
        window.location.href = ("vendedoresCadastro.html#" + linhaSelecionada);
    }

}

function excluir(){

    obtemLinhaSelecionada();

    if (!linhaSelecionada){
        alert("Pressione dois cliques no vendedor que deseja excluir");
        window.location.reload();
    }else{   
        var retorno = confirm("Deseja realmente Excluir esse registro?");
        if (retorno == true){

            var idSelecionado = Number(linhaSelecionada);

            const dadosExclusao = {
                id: idSelecionado
            }

            fetch(urlVendedores, {
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
            });
        }else{
            window.location.reload();
        }
    }
}