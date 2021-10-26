let bdContatos = [{id:1, nome:"iago",email:"iago@digitalhouse.com" , telefones:[79991916565,7965652121]},
            {id:2, nome:"Sergio",email:"Sergio@digitalhouse.com" , telefones:[8191656565,8165651414]},
            {id:3, nome:"Alexandre",email:"Alexandre@digitalhouse.com" , telefones:[8191656565,8165651414]}
        ]

function carregarContatos(contatos){
    const cardsContatos = document.getElementById("cardsContatos")
    let cardContatoNaolocalizadoHtml = `<section>
    <h3>Não há contatos cadastrados</h3>
    </section>`
    
    if(contatos.length <= 0){
        cardsContatos.innerHTML = cardContatoNaolocalizadoHtml
    } else {
        let cardsContatosHtml = ''
        for(const item of contatos){
            
            let telefoneHtml ='';
            // Com for of
            // for (const indexTel of item.telefones) {
            //     telefoneHtml+=`<li><a href="tel:${indexTel}">${indexTel}</a></li>`;
            // }

            // Com forEach
            item.telefones.forEach(item => {
                telefoneHtml+=`<li><a href="tel:${item}">${item}</a></li>`;
            });
            
            cardsContatosHtml += `
            <section id=contato_"${item.id}">
            <h3>${item.nome}</h3>
            <h4>${item.email}</h4>
            <ul>
                ${telefoneHtml}
            </ul>
            <div>
                <a href="#" onclick="onRemoverClick(${item.id})">Remover</a>
                <a href="#">Editar</a>
            </div>
            </section>`
        }
        cardsContatos.innerHTML = cardsContatosHtml;

    }

}
carregarContatos(bdContatos)

function onRemoverClick(id){
    
    // remover o elemento de id contato_id da DOM
    //document.getElementById(`contato_${id}`).remove();

    // remover do db contatos
    bdContatos = bdContatos.filter(idx => idx.id!==id);
    
    carregarContatos(bdContatos);
}