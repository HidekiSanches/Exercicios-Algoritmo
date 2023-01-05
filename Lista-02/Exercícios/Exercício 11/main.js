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

var salario = []

function calcular(){
    var erro = true
    var salarios = Number(bruto.value)

    if (Number.isNaN(salarios)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Salário invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nsalário invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Calculando...'
        let user = {bruto: ``, INSS: ``, IR: ``, sindical: ``, resto: ``}
        user.bruto = salarios
        user.INSS = (salarios*0.1).toFixed(2)
        user.IR = (salarios*0.2).toFixed(2) 
        user.sindical = ((salarios*1)/30).toFixed(2)
        user.resto = (salarios - (salarios*0.1) - (salarios*0.2 ) - ((salarios*1)/30)).toFixed(2)
        
        salario.push(user)
        setTimeout(() => {
            error.innerHTML = `<center>Envio realizada com sucesso!</center>`
            alert(`Apesar de seu bruto ser R$${salario[salario.length - 1].bruto}, após os descontos, você receberá somente R$${salario[salario.length - 1].resto}`)
        }, "2000")
    }

    bruto.value = ``
}