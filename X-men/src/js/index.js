// passo 1 - pegar o personagens no JS pra poder verificar quando o usuário passar o mause em cima de um deles

const personagens = document.querySelectorAll('.personagem');

// paaso 2 - adcionar a classe selecionado no personagem que o usuário passar o curso do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        // passo 1 - pegar o elemento do personagem grande pra adcionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        // passo 2 -alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
    
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        
    })
})