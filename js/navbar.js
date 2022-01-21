

let nome_login = document.querySelector("form input[name=nome_login]").value;
let btn_perfil = document.querySelector('.btn-primary')

btn_perfil.innerHTML = `${nome_login}`

