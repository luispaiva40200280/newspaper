let form = document.querySelector('form')
let pass = document.getElementsByName('pass').value;
let conf_pass = document.getElementsByName('conf_pass').value;


form.addEventListener("submit", event =>{
    event.preventDefault()
    if (pass == conf_pass) {
        alert('as suas informaçoes foram alteradas com sucesso')
        console.log('funciona');
    }else if (pass !== conf_pass) {
        alert('as palavras pass estão incorretas')
        console.log('não funciona');
    } 
    
    
})





















/* 
let user_name = document.getElementsByName('user_name')
let email = document.getElementsByName('email')
user_name[0].placeholder
email[0].placeholder 
pass[0].placeholder 
conf_pass[0].placeholder  */