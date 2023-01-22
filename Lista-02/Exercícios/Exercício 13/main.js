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

var cal = []

function calcular(){
    var paes = Number(pao.value)
    var casquinhas = Number(casquinha.value)
    var musculacoes = Number(musculacao.value)
    var corridas = Number(corrida.value)
    var erro = true

    if (Number.isNaN(paes)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Quantidade de pães invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \npão invalido`)
        }, "2000")
    }

    if (Number.isNaN(casquinhas)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Quantidade de casquinhas invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \ncasquinha invalida`)
        }, "2000")
    }

    if (Number.isNaN(musculacoes)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Minutos de musculação invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nmusculação invalida`)
        }, "2000")
    }

    if (Number.isNaN(corridas)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Minutos de corrida invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \ncorrida invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Calculando...'
        let user = {pão: ``, casquinha: ``, corrida: ``, musculação: ``, total: ``}
        user.pão = paes*100
        user.casquinha = casquinhas*300
        user.corrida = corridas*50
        user.musculação = musculacoes*30
        user.total = ((paes*100)+(casquinhas*300)-(corridas*50)-(musculacoes*30))
        
        cal.push(user)
        setTimeout(() => {
            error.innerHTML = `<center>Envio realizada com sucesso!</center>`
            alert(`Entre calorias que ganhou e perdeu, seu saldo de calorias no dia é de ${cal[cal.length - 1].total}`)
        }, "2000")
    }

    pao.value = ``
    casquinha.value = ``
    musculacao.value = ``
    corrida.value = ``
}