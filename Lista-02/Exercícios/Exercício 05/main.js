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

var guerreiro = []

function ver() {
    var erro = true
    var name = nome.value
    var poder = Number(ki.value)

    if (Number.isNaN(poder)){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Ki invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nki invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Enviando...'
        let user = {nome: ``, normal: ``, sayajin: ``, super: ``}
        user.nome = name
        user.normal = poder
        user.sayajin = poder*50
        user.super = poder*100
        
        guerreiro.push(user)
        setTimeout(() => {
            error.innerHTML = `Envio realizada com sucesso!`
            alert(`O guerreiro ${guerreiro[guerreiro.length - 1].nome} tem o poder ${guerreiro[guerreiro.length - 1].sayajin} na sua forma Super Sayajin e ${guerreiro[guerreiro.length - 1].super} na sua forma Super Sayajin 2`)
        }, "2000")
    }
    nome.value = ``
    ki.value = ``
}