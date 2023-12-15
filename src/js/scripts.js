
//Passo1
const personagens = document.querySelectorAll(".personagem")
//Passo2
personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
        //caso queira testar em uma tela menor
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
        //Passo3 verifica se ja existe o personagem selecionado, se sim devemos remover a seleçao dele
        removeSelecaoDoPersonagem()

        personagem.classList.add("selecionado")

        //objetivo2
        /*Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição
        do  personagem grande*/

        //passo1 -Pegar o elemento do personagem grande pra adicionar as informações dele
        alterarImagemSelecionado(personagem)
      

        //Passo3 - alterarar o nome dadescriçao do personagem
        alterarNomePersonagemSelecionado(personagem)

        //Passo4 - alterar a descrição do personagem grande

        alterarDescricaoPersonagem(personagem)

    })
})






function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem")
    descricaoPersonagem.innerText = personagem.getAttribute("data-description")
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem")
    nomePersonagem.innerText = personagem.getAttribute("data-name")
}

function alterarImagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande")

    //passo2 - alterar a Imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value

    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`
}


function removeSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

