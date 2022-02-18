let  btn = document.getElementsByClassName("remover_utilizador")

function remover(e){
    alert('tem certeza que quer eleminar este utilizador')
    
    for (let index = 0; index < btn.length; index++) {
        
        btn[index].parentNode.parentNode.remove()
        
    }
    e.preventDefault()
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', remover )

}

