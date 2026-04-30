const containerAdicionar = document.querySelector('.adicionar');
const btnAdicionar = document.querySelector('button');
const inputAdicionar = document.querySelector('input')

const containerTarefas = document.querySelector('.tarefas')
const templateTarefa = containerTarefas.querySelector('template')

function criarTarefa(texto){
    if (texto.trim === '') return
 
    const tarefa = templateTarefa.content.cloneNode(true)
    const spanTitle = tarefa.querySelector('span')
    const butnExcluir = tarefa.querySelector('button')

    spanTitle.textContent = texto
    containerTarefas.appendChild(tarefa)

    butnExcluir.onclick = () => butnExcluir.closest('.tarefa').remove()
}


btnAdicionar.onclick = function (){
    const texto = inputAdicionar.value.trim()
    criarTarefa(texto)
    inputAdicionar.value= ''
}
