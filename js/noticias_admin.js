
let form = document.getElementsByTagName('form')
let submit = document.getElementById('adiciona_noticia')

function adicionar_noticia(e){
    alert('a noticia foi adicionada com sucesso')
    console.log('noticia adicionada ');

    let noticia = document.getElementsByClassName('container-noticias')
    noticia.replaceChild(form)

    //this.parentNode.parentNode.remove();
    
    e.preventDefault() 
}