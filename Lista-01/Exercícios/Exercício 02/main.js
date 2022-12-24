var usuario = []

function falar(){
    var erro = true
    var pesos = Number(peso.value)
    var alturas = Number(altura.value)

    if (Number.isNaN(pesos)){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Peso invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \npeso invalido`)
        }, "2000")
    }
    if (Number.isNaN(alturas)){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`altura invalida`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \naltura invalida`)
        }, "2000")
    }

    if (erro){
        let user = {peso: ``, altura: ``}
        error.innerHTML = 'Enviando...'
        user.peso = Number(peso.value)
        user.altura = Number(altura.value)
        
        usuario.push(user)
        setTimeout(() => {
            error.innerHTML = `Envio realizado com sucesso!`
            alert(`Você pesa ${usuario[usuario.length - 1].peso}kg e tem ${usuario[usuario.length - 1].altura}m de altura`)
        }, "2000")
    }
    peso.value = ``
    altura.value = ``
}