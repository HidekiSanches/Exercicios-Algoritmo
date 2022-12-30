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

var alunos = []

function calcular(){
    var erro = true
    var name = nome.value
    var nota1 = Number(semestral.value)
    var nota2 = Number(continuada.value)

    if (!isNaN(name)){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Nome invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nnome invalida`)
        }, "2000")
    }
    if (Number.isNaN(nota1) || nota1 < 0 || nota1 > 10){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Nota invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nnota invalida`)
        }, "2000")
    }
    if (Number.isNaN(nota2) || nota2 < 0 || nota2 > 10){
        error.innerHTML = 'Enviando...'
        erro = false
        setTimeout(() => {
            alert(`Nota invalido`)
            error.innerHTML = `Erro no envio`
            console.error(`Erro \nnota invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Enviando...'
        let user = {nome: ``, continuada: ``, semestral: ``, média: ``}
        user.nome = name
        user.continuada = nota2
        user.semestral = nota1
        user.média = ((nota2*0.4)+(nota1*0.6)).toFixed(1)
        
        alunos.push(user)
        setTimeout(() => {
            error.innerHTML = `<center>Envio realizada com sucesso!</center>`
            error.innerHTML += `<center><br>Aluno: ${alunos[alunos.length - 1].nome}, Continuada: ${alunos[alunos.length - 1].continuada}, Semestral: ${alunos[alunos.length - 1].semestral}, Média: ${alunos[alunos.length- 1].média}</center>`
        }, "2000")
    }
    nome.value = ``
    semestral.value = ``
    continuada.value = ``
}