function validarLogin(){

    // variáveis de controle 
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');

    // ver se tem campo vazio
    if(emailInput.value.trim() === ''){
        alert('Preencha o campo E-mail.');
        return;
    }

    if(senhaInput.value.trim() === ''){
        alert('Preencha o campo Senha.');
        return;
    }

    /*ver se email e senha coincidem com o que está no banco de dados*/
    if(enviarLogin()){
        window.location.href = 'index.html'; //redireciona para pagina do jogo
    }

}

function enviarLogin(){
    /*ver se email e senha coincidem com o que está no banco de dados*/
    return true;
}

function criarUsuario(){
    window.location.href = 'cadastro.html';
}