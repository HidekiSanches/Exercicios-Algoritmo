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

var arrecadacao = []

function calcular(){
    var erro = true
    var qtdEstudante = Number(estudante.value)
    var qtdComuns = Number(comuns.value)
    var preco = Number(valor.value)

    if(Number.isNaN(qtdEstudante)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Quantidade de ingressos de estudante invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nqtdEstudante invalido`)
        }, "2000")
    }
    if(Number.isNaN(qtdComuns)){
        error.innerHTML = 'Calculando...'
        erro =false
        setTimeout(() => {
            alert(`Quantidade de ingressos comuns invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nqtdComuns invalida`)
        }, "2000")
    }
    if(Number.isNaN(preco)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Valor do ingresso invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nvalor invalida`)
        }, "2000")
    }

    if(erro){
        error.innerHTML = 'Calculando...'
        let user = {qtdEstudante: ``, qtdComuns: ``, valor: ``, total: ``}
        user.qtdEstudante = qtdEstudante
        user.qtdComuns = qtdComuns
        user.valor = preco
        user.total = ((qtdEstudante*preco)+((qtdComuns*preco)/2)).toFixed(2)
        
        arrecadacao.push(user)
        setTimeout(() => {
            error.innerHTML = `<center>Envio realizada com sucesso!</center>`
            alert(`A arrecadação foi de R$${arrecadacao[arrecadacao.length -1].total}`)
        }, "2000")
    }
    estudante.value = ``
    comuns.value = ``
    valor.value = ``
}