var time = []

function amor(){
    var erro = true
    var nome = nomes.value
    var mundiais = Number(mundial.value)

    if (!isNaN(nome)){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Nome invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nnome invalido`)
        }, "2000")
    }
    if (Number.isNaN(mundiais)){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Mundiais invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nmundiais invalida`)
        }, "2000")
    }

    if (erro){
        let user = {nome: ``, mundiais: ``}
        error.innerHTML = 'Enviando...'
        user.nome = nomes.value
        user.mundiais = Number(mundial.value)
        
        time.push(user)
        setTimeout(() => {
            error.innerHTML = `Envio realizado com sucesso!`
            alert(`O time ${time[time.length - 1].nome} tem ${time[time.length - 1].mundiais} mundiais da FIFA`)
        }, "2000")
    }
    nomes.value = ``
    mundial.value = ``
}