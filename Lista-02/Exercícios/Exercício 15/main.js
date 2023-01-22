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

var economia=[]

function calcular(){
    var filho1 = Number(primeiro.value)
    var filho2 = Number(segundo.value)
    var filho3 = Number(terceiro.value)
    var erro = true

    if (Number.isNaN(filho1)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Quantidade do primeiro filho invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nfilho1 invalido`)
        }, "2000")
    }
    if (Number.isNaN(filho2)){
        error.innerHTML = `Calculando...`
        erro= false
        setTimeout (() => {
            alert(`Quantidade do segundo filho invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nfilho2 invalido`)
        }, "2000")
    }
    if (Number.isNaN(filho3)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout (() => {
            alert(`Quantidade do terceiro filho invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro n\filho3 invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = `Calculando...`
        let user = {filho1: ``, filho2: ``, filho3: ``}
        user.filho1 = filho1*0.5
        user.filho2 = filho2*0.5
        user.filho3 = filho3*0.5

        economia.push(user)
        setTimeout(() => {
            error.innerHTML = `<center>Envio realizado com sucesso!</center>`
            alert(`O Huguinho economizou R$${(economia[economia.length - 1].filho1).toFixed(2)} pois fez ${filho1} depósitos`)
            alert(`O Zezinho economizou R$${(economia[economia.length - 1].filho2).toFixed(2)} pois fez ${filho2} depósitos`)
            alert(`O Luizinho economizou R$${(economia[economia.length - 1].filho3).toFixed(2)} pois fez ${filho3} depósitos`)
        }, "2000")
    }

    primeiro.value = ``
    segundo.value = ``
    terceiro.value = ``
}