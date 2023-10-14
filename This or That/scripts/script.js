function entrar(){
    window.location.href = 'login.html';
}

const imagens = [
    {
        src: 'imagens/cachorro-da-raca-lulu-da-pomeramia.jpg',
        alt: 'lulu da pomeramia',
        porcentagem: '0%' //enquanto não tem banco
    },
    {
        src: 'imagens/golden-retriever0.jpg',
        alt: 'golden retriever',
        porcentagem: '0%' //enquanto não tem banco
    }
];

// Função que adiciona as imagens
function adicionarImagens(){
    const imageContainer = document.getElementById('image-container');
    let isFirstImage = true;

    imagens.forEach(imagemInfo => {
        //adiciona OU entre as imagens
        if (!isFirstImage) {
            const ou = document.createElement('p');
            ou.className = 'OU';
            ou.textContent = 'OU';
            imageContainer.appendChild(ou);
        }

        const div = document.createElement('div');
        div.className = 'imagem-com-porcentagem';

        const button = document.createElement('button');
        button.className = 'image-button';

        const img = document.createElement('img');
        img.src = imagemInfo.src;
        img.alt = imagemInfo.alt;
        img.className = 'image-container img';

        const porcentagem = document.createElement('p');
        porcentagem.className = 'porcentagem';
        porcentagem.textContent = imagemInfo.porcentagem;

        button.appendChild(img);
        div.appendChild(button);

        //adicionar o OU, procurar outra forma de fazer
       /* if(index < imagens.length - 1) {
            const ou = document.createElement('p');
            ou.className = 'OU';
            ou.textContent = 'OU';
            div.appendChild(ou);
        }*/

        div.appendChild(porcentagem);
        imageContainer.appendChild(div);
        //imageContainer.insertBefore(div, imageContainer.lastChild);
        isFirstImage = false;
    });

    const buttons = document.querySelectorAll('.image-button');

    //escurecer imagem ao clicar
    buttons.forEach(button => {
       /* button.onclick = function(){
            const img = button.querySelector('img');
            img.style.filter = 'brightness(50%)';

            console.log('Imagem clicada:', img.src);
        }*/

        button.onclick = function() {
            // Adiciona a classe 'escurecida' de todas as imagens
            const todasImagens = document.querySelectorAll('.image-container img');
            todasImagens.forEach(imagem => {
                imagem.classList.add('escurecida');
            });

            // Deixa a imagem associada ao botão clicado normal
            const img = button.querySelector('img');
            img.classList.remove('escurecida');
            console.log('Imagem clicada:', img.src);

            //FALTA
            //atualizar porcentagem, quando tiver banco de dados
            //depois de alguns segundos trocar a imagem
        };
    })
}

//Inicializa a função quando a página carregar
window.addEventListener('load', adicionarImagens);