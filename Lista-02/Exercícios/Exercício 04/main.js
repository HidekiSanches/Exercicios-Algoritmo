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

var notas = []

function calcular() {
    var erro = true
    var not1 = Number(nota1.value)
    var not2 = Number(nota2.value)

    if (Number.isNaN(not1)|| not1 < 0 || not1 > 10){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Primeira nota invalida`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nnota invalida`)
        }, "2000")
    }
    if (Number.isNaN(not2) || not2 < 0 || not2 > 10){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Segunda nota invalida`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nnota invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Enviando...'
        let user = {nota1: ``, nota2: ``}
        user.nota1 = not1
        user.nota2 = not2
        
        notas.push(user)
        setTimeout(() => {
            error.innerHTML = `Envio realizada com sucesso!`
            error.innerHTML += `<center><br>Sua média foi de ${((notas[notas.length -1].nota1) +(notas[notas.length - 1].nota2))/2}</center>`
        }, "2000")
    }
    nota1.value = ``
    nota2.value = ``
}