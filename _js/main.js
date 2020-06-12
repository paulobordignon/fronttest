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