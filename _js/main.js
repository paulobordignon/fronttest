function menu() {

    var alterna = document.getElementById('conteudo')

    if(alterna.classList == 'exibeconteudo'){
        alterna.classList.remove('exibeconteudo')
        alterna.classList.add('exibemenu')
    }else{
        alterna.classList.remove('exibemenu')
        alterna.classList.add('exibeconteudo')
    }

}

function validar(){

    var nomefantasia = document.formmain.nomefantasia.value;
    var razaosocial = document.formmain.razaosocial.value;
    var cnpj = document.formmain.cnpj.value;
    var telefone = document.formmain.telefone.value;
    var email = document.formmain.email.value;

    if (!nomefantasia || !razaosocial || !cnpj || !telefone || !email){
        alert("Favor preencha todos os campos!");
        document.formmain.nomefantasia.focus();
        return false;
    }

    if (nomefantasia.length < 4){
        alert("O Nome Fantasia deve conter no mínimo 4 caracteres");
        document.formmain.nomefantasia.focus();
        return false;
    }

    if (razaosocial.length < 4){
        alert("A Razão Social deve conter no mínimo 4 caracteres");
        document.formmain.razaosocial.focus();
        return false;
    }

    if (cnpj.length != 14){
        alert("O CNPJ deve possuir 14 caracteres numéricos");
        document.formmain.cnpj.focus();
        return false;
    }

    if (telefone.length != 11){
        alert("O Telefone deve possuir 11 caracteres numéricos");
        document.formmain.telefone.focus();
        return false;
    }

    if (email.length < 4){
        alert("O E-mail deve conter no mínimo 4 caracteres");
        document.formmain.email.focus();
        return false;
    }

}

function validarPlano(){

    var nome = document.formmain.nome.value;
    var horas = document.formmain.horas.value;
    var preco = document.formmain.preco.value;

    if (!nome || !horas || !preco){
        alert("Favor preencha todos os campos!");
        document.formmain.nome.focus();
        return false;
    }

    if (nome.length < 4){
        alert("O nome do plano deve conter no mínimo 4 caracteres");
        document.formmain.nome.focus();
        return false;
    }
    
    if (horas < 0){
        alert("A quantidade de horas deve ser superior a zero.");
        document.formmain.horas.focus();
        return false;
    }

    if (preco < 0){
        alert("O preço deve ser superior a zero.");
        document.formmain.preco.focus();
        return false;
    }


}