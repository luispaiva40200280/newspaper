let form = document.getElementsByTagName('form')

form.addEventListener("submit", event =>{
    alert('a noticia fo adicionada com sucesso')
    
    event.preventDefault() 
})