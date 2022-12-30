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

var pri = 0
var seg = 0

function soma(){
    var erro = true
    pri = Number(num1.value)
    seg = Number(num2.value)

    if (Number.isNaN(pri)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Primeiro numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }
    if (Number.isNaN(seg)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Segundo numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Calculando...'
        
        setTimeout(() => {
            error.innerHTML = `<br>A soma entre ${pri} e ${seg} é ${pri + seg}`
        }, "2000")
    }
    num1.value = ``
    num2.value = ``
}
function sub(){
    var erro = true
    pri = Number(num1.value)
    seg = Number(num2.value)

    if (Number.isNaN(pri)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Primeiro numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }
    if (Number.isNaN(seg)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Segundo numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Calculando...'
        
        setTimeout(() => {
            error.innerHTML = `<br>A diferença entre ${pri} e ${seg} é ${pri - seg}`
        }, "2000")
    }
    num1.value = ``
    num2.value = ``
}

function mult(){
    var erro = true
    pri = Number(num1.value)
    seg = Number(num2.value)

    if (Number.isNaN(pri)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Primeiro numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }
    if (Number.isNaN(seg)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Segundo numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Calculando...'
        
        setTimeout(() => {
            error.innerHTML = `<br>O produto entre ${pri} e ${seg} é ${pri * seg}`
        }, "2000")
    }
    num1.value = ``
    num2.value = ``
}

function div(){
    var erro = true
    pri = Number(num1.value)
    seg = Number(num2.value)

    if (Number.isNaN(pri)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Primeiro numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }
    if (Number.isNaN(seg)){
        error.innerHTML = 'Calculando...'
        erro = false
        setTimeout(() => {
            alert(`Segundo numero invalido`)
            error.innerHTML = `Erro no calculo`
            console.error(`Erro \nnumero invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Calculando...'
        
        setTimeout(() => {
            error.innerHTML = `<br>A razão entre ${pri} e ${seg} é ${pri / seg}`
        }, "2000")
    }
    num1.value = ``
    num2.value = ``
}