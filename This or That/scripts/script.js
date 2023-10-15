function entrar(){
    window.location.href = 'login.html';
}

const imagens = [ //lista de iamgens, futuramente pegar do banco de dados ou API
    {
        src: 'imagens/crr1.jpg',
        alt: 'lulu da pomeramia'
        //porcentagem: '0%' //enquanto não tem banco
    },
    {
        src: 'imagens/crr2.jpg',
        alt: 'golden retriever'
        //porcentagem: '0%' //enquanto não tem banco
    },
    {
        src: 'imagens/crr6.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr4.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr5.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr6.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr7.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr8.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr9.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr10.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr11.jpg',
        alt: ''
    },
    {
        src: 'imagens/crr12.jpg',
        alt: ''
    }
];

const indicesUsados = []; //para não repetir imagens que já foram

// Função que adiciona as imagens
function adicionarImagens(){
    const imageContainer = document.getElementById('image-container');
    const imagensAleatorias = escolherImagensAleatorias(2); // escolhe 2 imagens aleatorias da lista de imagens
    let isFirstImage = true;

    imagensAleatorias.forEach(imagemInfo => {
        //adiciona OU entre as imagens
        //para adicionar o ou apenas depois da primeira imagem
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
        porcentagem.textContent = '0%';

        button.appendChild(img);
        div.appendChild(button);

        div.appendChild(porcentagem);
        imageContainer.appendChild(div);
        isFirstImage = false;
    });

    const buttons = document.querySelectorAll('.image-button');

    //escurecer imagem ao clicar
    buttons.forEach(button => {

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

// Função que escolhe as imagens aleatóriamente
function escolherImagensAleatorias(quantidade){
    const imagensAleatorias = [];

    while (imagensAleatorias.length < quantidade){
        const indiceAleatorio = Math.floor(Math.random() * imagens.length);

        if(!indicesUsados.includes(indiceAleatorio)){
            imagensAleatorias.push(imagens[indiceAleatorio]);
            indicesUsados.push(indiceAleatorio);
        }
    }
    
    return imagensAleatorias;
}

//Inicializa a função quando a página carregar
window.addEventListener('load', adicionarImagens);
