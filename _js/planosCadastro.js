const urlPlanos = 'https://my-proposta.azurewebsites.net/v1/planos';
const form = document.getElementById('form');
var url = location.hash.split("E");
var idPlano = url[2];

if (!idPlano){

    form.addEventListener('submit', function(e){
        e.preventDefault();

        var nome = document.formmain.nome.value;
        var horas = document.formmain.horas.value;
        var preco = document.formmain.preco.value;
        var chkAtivo = document.getElementById("ativo");
        var ativo = "";

        if (chkAtivo.checked){
            ativo = "true";
        }

        const dadosPlano = {
            nome: nome,
            horas: Number(horas),
            preco: Number(preco),
            ativo: Boolean(ativo)
        }

        console.log(ativo);
        fetch(urlPlanos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosPlano)
        }).then(response=> {
            return response.json();
        }).then(({ message }) => {
            alert(message);
            window.location.reload();
        }).catch(error => console.error('Ocorreu o seguinte erro:', error));
    });

}else{

    fetch(urlPlanos)
        .then(response => {
            return response.json();
        }).then(jsonBody => {

            const dados = jsonBody;

            for (let i=0; i < dados.length; i++){
                if (dados[i].id == idPlano){
                    document.querySelector("#nome").value = dados[i].nome;
                    document.querySelector("#horas").value = dados[i].horas;
                    document.querySelector("#preco").value = dados[i].preco;
                    if (dados[i].ativo == Boolean(false)){
                        document.querySelector("#ativo").checked = 0;
                    }
                }
            }     
    }).catch(error => console.error('Ocorreu o seguinte erro:', error));

    form.addEventListener('submit', function(e){
        e.preventDefault();

        var nome = document.formmain.nome.value;
        var horas = document.formmain.horas.value;
        var preco = document.formmain.preco.value;
        var chkAtivo = document.getElementById("ativo");
        var ativo = "";

        if (chkAtivo.checked){
            ativo = "true";
        }

        const dadosPlano = {
            id: Number(idPlano),
            nome: nome,
            horas: Number(horas),
            preco: Number(preco),
            ativo: Boolean(ativo)
        }

        fetch(urlPlanos, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosPlano)
        }).then(response=> {
            return response.json();
        }).then(({ message }) => {
            alert(message);
            window.location.href = ("planosListagem.html");
        }).catch(error => console.error('Ocorreu o seguinte erro:', error));
    });


}