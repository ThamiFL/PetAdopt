
// Passo 1: Pegar todos os pets da página
const pets = document.querySelectorAll(".pet")
// Passo 2: Pegamos os elementos do card principal
// Estes são os campos (lugares) onde vamos colocar as informações do pet clicado
const nome = document.getElementById("nomeDoPet") // Atualmente está Scooby
const descricao = document.getElementById("descricao")
const fotoGrande = document.getElementById("fotoGrande")
// for(inicialização; condição; incremento){
//     codigo a ser executado
// }
// Ele faz: Comece no pet 0; depois vá para o pet 1, depois vai pro pet 2, depois vá pro pet 3 e por último o pet 4, onde finaliza a quantidade dos elementos que tem na variável
// 0 é menor do que 4 = VERDADEIRO (Continue o loop)
// 1 é menor do que 4 = VERDADEIRO (Continue o loop)
// 2 é menor do que 4 = VERDADEIRO (Continue o loop)
// 3 é menor do que 4 = VERDADEIRO (Continue o loop)
// 4 é menor do que 4 = FALSO (PARE O LOOP IMEDIATAMENTE)
// pets.length : quantidade de pets
for(let i = 0; i < pets.length; i++){
    
    // Pegamos o pet atual
    const pet = pets[i]
    // Capturamos a imagem do pet atual
    const miniatura = pet.querySelector("img")
    miniatura.addEventListener("click", () => {
        nome.textContent = pet.querySelector(".nome").textContent
        descricao.textContent = pet.querySelector(".descricaopet").textContent
        fotoGrande.src = miniatura.src
    })
}