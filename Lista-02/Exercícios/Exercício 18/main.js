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
    var menos = Number(menor.value)
    var mais = Number(maior.value)
    var erro = true

    if (Number.isNaN(menos)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout (() => {
            alert(`Filhos menores de 10 anos invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nmenor invalido`)
        }, "2000")
    }

    if (Number.isNaN(mais)){
        error.innerHTML =`Calculando...`
        erro = false
        setTimeout (() => {
            alert(`Filhos maiores ou igual a 10 anos invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nmaior invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = `Calculando...`
        let user = {menor: ``, maior: ``, pensao: ``}
        user.menor = menos
        user.maior = mais
        user.pensao = (menos*30) + (mais*20)

        filhos.push(user)
        setTimeout (() => {
            error.innerHTML = `<center>Envio realizado com sucesso!</center><br>`
            error.innerHTML += `<center>Você tem <b>${filhos[filhos.length - 1].menor}</b> filhos menores de 10 anos e <b>${filhos[filhos.length - 1].maior}</b> filhos a partir de 10 anos, logo, seu "Auxílio Filhos" será de <b>R$${filhos[filhos.length - 1].pensao}</b></center>`
        }, "2000")
    }

    menor.value = ``
    maior.value = ``
}