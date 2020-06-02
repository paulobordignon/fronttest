function validar(){

    var usuario = document.formlogin.usuario.value;
    var senha = document.formlogin.senha.value;
    
    if (!usuario || !senha){
        alert("Preencha o usuário e a senha");
        document.formlogin.usuario.focus();
        return false;
    }
    
    if (senha.length < 3 ){
        alert("A senha deve conter no mínimo 3 caracteres");
        document.formlogin.senha.focus();
        return false;
    }
    
    if (usuario == "paulo" && senha == "12345") {
        return true;
    }else{
        alert("Usuário e/ou senha incorreto(s)");
        document.formlogin.usuario.focus();
        return false;
    }
    
}