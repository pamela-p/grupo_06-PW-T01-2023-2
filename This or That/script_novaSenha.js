function validarSenha(){

    // variáveis de controle 
    const form = document.querySelector('form');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    // ver se tem campo vazio
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

    /* Enviar alteração da senha para o banco de dados */
    enviarSenha();

    alert('Alteração realizado com sucesso!')
    
    window.location.href = 'login.html'; //redireciona para login

}

function enviarSenha(){
    /* Enviar alteração da senha para o banco de dados */
    return;
}
