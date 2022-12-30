// ░░▒░░█░ 
// ░░▒░█ 
// ░░░█ 
// ░░█░░░░███████ 
// ░██░░░██▓▓███▓██▒ 
// ██░░░█▓▓▓▓▓▓▓█▓███ 
// ██░░██▓▓▓(◐)▓█▓▓█▓█ 
// ███▓▓▓█▓▓▓▓▓█▓█▓▓▓▓█ 
// ▀██▓▓█░██▓▓▓▓██▓▓▓▓▓█ 
// ░▀██▀░░█▓▓▓▓▓▓▓▓▓▓▓▓▓█ 
// ░░░░▒░░░█▓▓▓▓▓█▓▓▓▓▓▓█ 
// ░░░░▒░░░█▓▓▓▓█▓█▓▓▓▓▓█ 
// ░▒░░▒░░░█▓▓▓█▓▓▓█▓▓▓▓█ 
// ░▒░░▒░░░█▓▓▓█░░░█▓▓▓█ 
// ░▒░░▒░░██▓██░░░██▓▓██

var valores = []

function love() {
    var erro = true
    var quantidade = Number(qtd.value)
    var preços = Number(preço.value)

    if (Number.isNaN(quantidade)|| quantidade <= 1){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Quantidade invalida`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nquantidade invalida`)
        }, "2000")
    }
    if (Number.isNaN(preços) || preços <= 0){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Preço invalida`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \npreço invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Enviando...'
        let user = {preço: ``, qtd: ``}
        user.preço = preços
        user.qtd = quantidade
        
        valores.push(user)
        setTimeout(() => {
            error.innerHTML = `Envio realizada com sucesso!`
            alert(`Cada um dos ${valores[valores.length - 1].qtd} amigos vai pagar R$${(valores[valores.length - 1].preço)/(valores[valores.length - 1].qtd)}`)
        }, "2000")
    }
    qtd.value = ``
    preço.value = ``
}