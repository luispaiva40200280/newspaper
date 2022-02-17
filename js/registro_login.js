
//variaveis do form_registro
let registo_form = document.getElementById("registro_form");

//lista de utilizadores que já estão tem conta registrada 
//lista de emails
//lista de passwords


let login_form = document.getElementById("form_login");
let no_login = document.querySelector("form input[name=nome_login]").value;
let pass_login = document.querySelector("form input[name=pass_login]").value

/* let admin_nome = 'luis' 
let admin_pass = '1234567890' */


registo_form.addEventListener("submit", (e) => {
    
    alert('conta regitrada com sucesso!!')
    
    window.location.pathname = "/html/pagina_logada.html"
    e.preventDefault();
    
})

login_form.addEventListener("submit", (e) => {
    
    alert('login feito com sucesso!!')
    window.location.pathname = "/html/pagina_logada.html"
    e.preventDefault();
    
})



