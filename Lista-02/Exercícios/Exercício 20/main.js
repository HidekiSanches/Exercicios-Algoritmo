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

var erro = true

function ssj() {
    var power = Number(poder.value)
    erro = true

    if (Number.isNaN(power) || poder.value == ``){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Poder invalido`)
            error.innerHTML = `Erro no calculo`
            console.erro(`Erro \npower invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = `Calculando...`

        setTimeout(() => {
            error.innerHTML = `<center>Envio realizado com sucesso!</center><br>`
            error.innerHTML += `<center>Após se transformar em SSJ, o ki desse Sayajin passa a ser de ${power*50}</center>`
        }, "2000")
    }

    poder.value = ``
}

function ssj2(){
    var power = Number(poder.value)
    erro = true

    if (Number.isNaN(power) || poder.value == ``){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout (() => {
            alert(`Poder invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \npower invalido`)
        }, "2000")
    }

    if (erro) {
        error.innerHTML = `Calculando...`

        setTimeout(() => {
            error.innerHTML = `<center>Envio realizado com sucesso!</center><br>`
            error.innerHTML += `<center>Após se transformar em SSJ2, o ki desse Sayajin passa a ser de ${power*100}</center>`
        }, "2000")
    }

    poder.value = ``
}

function ssj3(){
    var power = Number(poder.value)
    erro = true

    if (Number.isNaN(power) || poder.value == ``){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Poder invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \npower invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = `Calculando...`

        setTimeout(() => {
            error.innerHTML = `<center>Envio realizado com sucesso!</center><br>`
            error.innerHTML += `<center>Após se transformar em SSJ2, o ki desse Sayajin passa a ser de ${power*200}</center>`
        }, "2000")
    }

    poder.value = ``
}