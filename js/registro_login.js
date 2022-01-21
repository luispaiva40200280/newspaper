
//variaveis do form_registro
let registo_form = document.getElementById("registro_form");

//lista de utilizadores que já estão tem conta registrada 
//lista de emails
//lista de passwords


let login_form = document.getElementById("form_login");
let no_login = document.querySelector("form input[name=nome_login]").value;
let pass_login = document.querySelector("form input[name=pass_login]").value

let admin_nome = 'luis' 
let admin_pass = '1234567890'


registo_form.addEventListener("submit", (e) => {
    
    let email_registro = document.querySelector("form input[name=email_registro]").value;
    let password_registro = document.querySelector("form input[name=pass_registro]").value;
    let c_password_registro = document.querySelector("form input[name=conf_pass]").value;
    let username = document.querySelector("form input[name=nome_registro]").value;
    
    if (email_registro == 'luis@gmail.com') {
        console.log('guardou o email')
        location.href = "http://127.0.0.1:5500/html/pagina_logada.html";
    }else if( username == admin_nome ){
        console.log('guardou o nome')
        location.href = "http://127.0.0.1:5500/html/pagina_logada.html";
        
    }else if(password_registro == c_password_registro){
        console.log('guardou as pass')
        location.href = "http://127.0.0.1:5500/html/pagina_logada.html";

    }
    
    
    else if (password_registro !== c_password_registro && c_password_registro !== admin_pass) {
        
        alert('as duas passes não são iguais ')
    
    }else if (username == 'admin_nome') {

        alert('username já esta a ser utilizado')

    }else if (email_registro !== 'luis@gmail.com') {

        alert('email já esta a ser utilizado ')
    }
    
    e.preventDefault();
    
})



/* login_form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if (lista_user_name.find(nome) == true  && lista_password.find(pass_login) == true && lista_user_name.indexof(nome) == lista_password.indexof(pass_login)) {
        
        window.location.href = "http://127.0.0.1:5500/html/pagina_logada.html";
        
    } else {
        alert('nome ou pass estão errado, talvez ainda não tenha conta ')
        let nome_admin =  lista_user_name.find(nome)
        if (nome_admin == true && admin_pass == pass_login) {
            location.href = "http://127.0.0.1:5500/html/useradmin.html"
            
        }
    }
})

 */