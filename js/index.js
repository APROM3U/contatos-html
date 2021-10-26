
let inputEmail = document.querySelector('#email');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// essa função permite associar mais de uma função ao mesmo elemento
//inputEmail.addEventListener('keypress', () => {console.log(inputEmail.value)})

//inputEmail.onkeypress = () => {console.log('pressionou tecla')}

// existem 3 eventos para teclado keypress, keydown, keyup

inputEmail.addEventListener('keypress',(event)=>{
    
    // validar conteúdo email
    if(validateEmail(inputEmail.value)){
        inputEmail.className = '';
    }
    // se não, aplicar o erro
    else 
    {
        inputEmail.className = 'erro';
    }
    
})
/**
 * Associar ao evento Keypress
 * um função que verifique se o conteúdo do campo é um email
 * válido. Caso seja, aplicar a classe erro ao campo.
 * Caso contrário, limpar as classes do campo.
 * function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());}
 */