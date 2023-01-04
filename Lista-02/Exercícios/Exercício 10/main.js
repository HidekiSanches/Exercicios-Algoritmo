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

var imc = {peso: [], altura: []}

function homem(){
    var erro = true
    var pesos = Number(peso.value)
    var alturas = Number(altura.value)

    if (Number.isNaN(pesos) || pesos < 0 || (peso.value == `` && altura.value != ``)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Peso invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \npeso invalido`)
        }, "2000")
    }
    if(Number.isNaN(alturas) || alturas < 0 || alturas >= 3 || (peso.value != `` && altura.value == ``)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Altura invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \naltura invalida`)
        }, "2000")
    }

    if(erro){
        error.innerHTML = 'Calculando...'
        
        if (peso.value == `` && altura.value == ``){
            setTimeout(() => {
              error.innerHTML = `<br>IMC = ${((imc.peso[imc.peso.length - 1]/(imc.altura[imc.altura.length - 1]*imc.altura[imc.altura.length - 1]))).toFixed(2)}kg/m2`;
            }, "2000");
        } else {
            imc.peso.push(pesos)
            imc.altura.push(alturas)
            setTimeout(() => {
                error.innerHTML = `<br>IMC = ${((imc.peso[imc.peso.length - 1]/(imc.altura[imc.altura.length - 1]*imc.altura[imc.altura.length - 1]))).toFixed(2)}kg/m2`;
            }, "2000");
        }
    }
    peso.value = ``
    altura.value = ``
}
function mulher(){
    var erro = true
    var pesos = Number(peso.value)
    var alturas = Number(altura.value)

    if (Number.isNaN(pesos) || pesos < 0 || (peso.value == `` && altura.value != ``)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Peso invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \npeso invalido`)
        }, "2000")
    }
    if(Number.isNaN(alturas) || alturas < 0 || alturas >= 3 || (peso.value != `` && altura.value == ``)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Altura invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \naltura invalida`)
        }, "2000")
    }

    if(erro){
        error.innerHTML = 'Calculando...'
        
        if (peso.value == `` && altura.value == ``){
            setTimeout(() => {
              error.innerHTML = `<br>IMC = ${((imc.peso[imc.peso.length - 1]/(imc.altura[imc.altura.length - 1]*imc.altura[imc.altura.length - 1])) - ((imc.peso[imc.peso.length - 1]/(imc.altura[imc.altura.length - 1]*imc.altura[imc.altura.length - 1])*0.1))).toFixed(2)}kg/m2`;
            }, "2000");
        } else {
            imc.peso.push(pesos)
            imc.altura.push(alturas)
            setTimeout(() => {
                error.innerHTML = `<br>IMC = ${((imc.peso[imc.peso.length - 1]/(imc.altura[imc.altura.length - 1]*imc.altura[imc.altura.length - 1])) - ((imc.peso[imc.peso.length - 1]/(imc.altura[imc.altura.length - 1]*imc.altura[imc.altura.length - 1])*0.1))).toFixed(2)}kg/m2`;
            }, "2000");
        }
    }
    peso.value = ``
    altura.value = ``
}