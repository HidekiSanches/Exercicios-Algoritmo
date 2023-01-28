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

var filhos = []

function calcular(){
    var filho = Number(qtdFilhos.value)
    var erro = true

    if (Number.isNaN(filho)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Quantidade de filhos invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nfilho invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = `Calculando...`
        let user = {qtdFilho: ``, pensao: ``}
        user.filho = filho
        user.pensao = filho*25

        filhos.push(user)
        setTimeout (() => {
            error.innerHTML = `<center>Envio realizado com sucesso!</center> <br>`
            error.innerHTML += `Você tem <b>${filhos[filhos.length - 1].filho}</b> filhos, logo, seu "Auxílio Filhos" será de <b>R$${filhos[filhos.length-1].pensao}</b>`
        }, "2000")
    }

    qtdFilhos.value = ``
}