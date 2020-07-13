const urlVendedores = 'https://my-proposta.azurewebsites.net/v1/vendedores';
const form = document.getElementById('form');
var url = location.hash.split("#");
var idVendedor = url[1];

if (!idVendedor){

    form.addEventListener('submit', function(e){
        e.preventDefault();

        var nomefantasia = document.formmain.nomefantasia.value;
        var cnpj = document.formmain.cnpj.value;
        var razaosocial = document.formmain.razaosocial.value;
        var telefone = document.formmain.telefone.value;
        var email = document.formmain.email.value;

        const dadosVendedor = {
            nome: nomefantasia,
            cnpj: cnpj,
            razaoSocial: razaosocial,
            telefone: telefone,
            email: email
        }

        fetch(urlVendedores, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosVendedor)
        }).then(response=> {
            return response.json();
        }).then(({ message }) => {
            alert(message);
            window.location.reload();
        }).catch(error => console.error('Ocorreu o seguinte erro:', error));
    });

}else{

    fetch(urlVendedores)
        .then(response => {
            return response.json();
        }).then(jsonBody => {

            const dados = jsonBody;

            for (let i=0; i < dados.length; i++){
                if (dados[i].id == idVendedor){
                    document.querySelector("#nomefantasia").value = dados[i].nome;
                    document.querySelector("#razaosocial").value = dados[i].razaoSocial;
                    document.querySelector("#cnpj").value = dados[i].cnpj;
                    document.querySelector("#cnpj").disabled = true;
                    document.querySelector("#telefone").value = dados[i].telefone;
                    document.querySelector("#email").value = dados[i].email;
                }
            }     
    }).catch(error => console.error('Ocorreu o seguinte erro:', error));

    form.addEventListener('submit', function(e){
        e.preventDefault();

        var nomefantasia = document.formmain.nomefantasia.value;
        var cnpj = document.formmain.cnpj.value;
        var razaosocial = document.formmain.razaosocial.value;
        var telefone = document.formmain.telefone.value;
        var email = document.formmain.email.value;

        const dadosVendedor = {
            id: Number(idVendedor),
            nome: nomefantasia,
            cnpj: cnpj,
            razaoSocial: razaosocial,
            telefone: telefone,
            email: email
        }

        fetch(urlVendedores, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosVendedor)
        }).then(response=> {
            return response.json();
        }).then(({ message }) => {
            alert(message);
            window.location.href = ("vendedoresListagem.html");
        }).catch(error => console.error('Ocorreu o seguinte erro:', error));
    });


}