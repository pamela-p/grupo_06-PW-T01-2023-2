function validarEmail(){

    // variáveis de controle 
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');

    // ver se tem campo vazio
    if(emailInput.value.trim() === ''){
        alert('Preencha o campo E-mail.');
        return;
    }

    /*ver se email coincide com o que está no banco de dados*/
    if(enviarEmail()){
        window.location.href = 'novaSenha.html'; //redireciona para pagina do jogo
    }

}

function enviarEmail(){
    /*ver se email coincide com o que está no banco de dados*/
    return true;
}
