function validarCadastro(){

    // variáveis de controle 
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    // ver se tem campo vazio
    if(nomeInput.value.trim() === ''){
        alert('Preencha o campo Nome.');
        return;
    }

    if(emailInput.value.trim() === ''){
        alert('Preencha o campo E-mail.');
        return;
    }

    if(senhaInput.value.trim() === ''){
        alert('Preencha o campo Senha.');
        return;
    }

    if(confirmarSenhaInput.value.trim() === ''){
        alert('Preencha o campo Repita a senha.');
        return;
    }

    // ver se as senhas são diferentes
    if(senhaInput.value !== confirmarSenhaInput.value){
        alert('As senhas são diferentes');
        return;
    }

    /* Enviar o cadastro para o banco de dados */
    enviarCadastro();

    alert('Cadastro realizado com sucesso!')
    
    window.location.href = 'login.html'; //redireciona para login

}

function enviarCadastro(){
    /* Enviar o cadastro para o banco de dados */
    return;

}
