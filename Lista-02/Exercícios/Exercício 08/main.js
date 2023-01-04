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

var desperdicio = []

function calcular(){
    var erro = true
    var torneira1 = Number(tor1.value)
    var torneira2 = Number(tor2.value)
    var torneira3 = Number(tor3.value)

    if (Number.isNaN(torneira1)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Primeira torneira invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nprimeira torneira invalida`)
        }, "2000")
    }
    if (Number.isNaN(torneira2)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Segunda torneira invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nsegunda torneira invalida`)
        }, "2000")
    }
    if (Number.isNaN(torneira3)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Terceira torneira invalida`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nterceira torneira invalida`)
        }, "2000")
    }

    if(erro){
        error.innerHTML = 'Calculando...'
        let user = {tor1: ``, tor2: ``, tor3: ``, total: ``}
        user.tor1 = torneira1*15
        user.tor2 = torneira2*15
        user.tor3 = torneira3*15
        user.total = ((torneira1*15)+(torneira2*15)+(torneira3*15)).toFixed(2)
        
        desperdicio.push(user)
        setTimeout(() => {
            error.innerHTML = `<center>Envio realizada com sucesso!</center>`
            alert(`Suas 3 torneiras, juntas, desperdiçaram ${desperdicio[desperdicio.length -1].total} litros de água`)
        }, "2000")
    }
    tor1.value = ``
    tor2.value = ``
    tor3.value = ``
}