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

function economia() {
    var erro = true
    var quantidade = Number(qtd.value)
    var preço = Number(valor.value)

    if (Number.isNaN(quantidade)|| quantidade < 1){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Quantidade invalida`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nquantidade invalida`)
        }, "2000")
    }
    if (Number.isNaN(preço) || preço <= 0){
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
        user.preço = preço
        user.qtd = quantidade
        
        valores.push(user)
        setTimeout(() => {
            error.innerHTML = `Envio realizada com sucesso!`
            alert(`Você economizara R$${((valores[valores.length - 1].preço)*valores[valores.length - 1].qtd)/2} por mês`)
        }, "2000")
    }
    qtd.value = ``
    valor.value = ``
}