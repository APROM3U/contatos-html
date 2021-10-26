const url = "http://contatos-nodb.herokuapp.com";

// associar a submissão do formulário à função onFormSubmit
const form = document.getElementById("form");
form.addEventListener('submit', onFormSubmit);

// Criar função onFormSubmit impedindo a submissão do formulário
function onFormSubmit(evento){
    evento.preventDefault(); // Evita acontecer o procedimento padrão, não deixando enviar
    
    //console.log(evento);
    // Capturar os dados para cadastrar
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let validaSenha = document.getElementById("confirmacao").value;

    // Confere se as senhas são iguais
    if(senha !== validaSenha){
        console.log('Senha NÃO confere');
        return alert('Senha NÃO confere');
    }

    // Chamar a função Cadastrar
    cadastrar(nome, email, senha);
}

// Função assincrona
async function cadastrar(nome, email, senha){

    let response = await fetch(`${url}/registrar`, {
        method:"POST",
        body:JSON.stringify({
            nome, email, senha
        }),
        headers:{
            "Content-type":"application/json"
        }
    });

    // transforma a resposta da requisição em json
    let json = await response.json();

    // Guardar o token no sessionStorage, NOTA: só guarda string
    sessionStorage.setItem("token",json.token); // guardar item
    
    console.log(json);
    getContatos();
}

async function getContatos(){
    let response = await fetch(`${url}/contatos`, {
        method:"GET",
        headers:{
            // recuperar item
            Authorization: `Bearer ${sessionStorage.getItem("token")}` 
        }
    });

    let contatos = await response.json();
    console.log(contatos);

}