const urlclientes = 'https://my-proposta.azurewebsites.net/v1/clientes';
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var nomefantasia = document.formmain.nomefantasia.value;
    var cnpj = document.formmain.cnpj.value;
    var razaosocial = document.formmain.razaosocial.value;
    var telefone = document.formmain.telefone.value;
    var email = document.formmain.email.value;

    const dadosCliente = {
        nome: nomefantasia,
        cnpj: cnpj,
        razaoSocial: razaosocial,
        telefone: telefone,
        email: email
    }

    fetch(urlclientes, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosCliente)
    }).then(response=> {
        return response.json();
    }).then(json => {
        console.log(json);
    });
});