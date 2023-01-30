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

var irmão = []

function calcular(){
    var salarios = Number(salario.value)
    var ficantes = Number(ficante.value)
    var foras = Number(fora.value)
    var erro = true

    if (Number.isNaN(salarios)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Salário invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nsalario invalido`)
        }, "2000")
    }

    if (Number.isNaN(ficantes)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Ficante invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nficante invalido`)
        }, "2000")
    }

    if (Number.isNaN(foras)){
        error.innerHTML = `Calculando...`
        erro = false
        setTimeout(() => {
            alert(`Fora invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nfora invalido`)
        }, "2000")
    }

        if (erro){
            error.innerHTML = `Calculando...`
            let user = {salario: ``, ficantes: ``, foras: ``}
            user.salario = salarios
            user.ficantes = ficantes
            user.foras = foras

            irmão.push(user)
            setTimeout(() => {
                error.innerHTML = `<center>Envio realizado com sucesso!</center><br>`
                alert(`Salário desejável: R$${(irmão[irmão.length - 1].salario*1.1).toFixed(2)}`)
                alert(`Ficantes desejável: ${(irmão[irmão.length - 1].ficantes+1)}`)
                alert(`Foras desejável: ${irmão[irmão.length - 1].foras-1}`)
            }, "2000")
        }

    salario.value = ``
    ficante.value = ``
    fora.value = ``
}