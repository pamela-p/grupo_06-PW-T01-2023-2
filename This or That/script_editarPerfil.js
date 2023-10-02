function validarPerfil(){

    /*Preencher nome com o que está no banco de dados
    Preencher email com o que está no banco de dados*/

    // variáveis de controle 
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaAntigaInput = document.getElementById('senhaAntiga');
    const novaSenhaInput = document.getElementById('novaSenha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    /* verificar se teve alterção no nome ou email*/

    /* verificar se teve alteração na senha 
    verificar se a senhaAntigaInput é igual a senha do banco*/

    /*se teve alterção na senha ver se são iguais
    // ver se as senhas são diferentes
    if(novaSenhaInput.value !== confirmarSenhaInput.value){
        alert('As senhas são diferentes');
        return;
    }*/

    /* Enviar o cadastro para o banco de dados */
    enviarPerfil();

    alert('Alteração realizado com sucesso!')
    
    window.location.href = 'index.html'; //redireciona para login

}

function enviarPerfil(){
    /* Enviar alterações do perfil para o banco de dados */
    return;
}
