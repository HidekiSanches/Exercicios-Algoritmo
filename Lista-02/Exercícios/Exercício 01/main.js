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

var idades = []

function man() {
    if (age.value == ``){
        var erro = true
        var idade = Number(age.value)
    
        if (Number.isNaN(idade)){
            error.innerHTML = 'Pesquisando...'
            erro = false
            setTimeout(() => {
                alert(`idade invalida`)
                error.innerHTML = `Erro na pesquisa`
                console.error(`Erro \nidade invalida`)
            }, "2000")
        }
    
        if (erro){
            error.innerHTML = 'Pesquisando...'
            
            setTimeout(() => {
                error.innerHTML = `Pesquisa realizada com sucesso!`
                if (idade >= 70) {
                    alert(`Legal vc já pode se aposentar, os homens no brasil se aposentam com 70 anos e vc tem ${idades[idades.length - 1]}`)
                } else {
                    alert(`Que pena vc n pode se aposentar, os homens no brasil se aposentam com 70 anos e vc tem ${idades[idades.length - 1]}`)
                }
            }, "2000")
        }
        age.value = ``
    } else {
        var erro = true
        var idade = Number(age.value)

        if (Number.isNaN(idade)){
        error.innerHTML = 'Pesquisando...'
        erro = false
        setTimeout(() => {
            alert(`idade invalida`)
            error.innerHTML = `Erro na pesquisa`
            console.error(`Erro \nidade invalida`)
        }, "2000")
    }
    
    if (erro){
        error.innerHTML = 'Pesquisando...'
        
        idades.push(idade)
        setTimeout(() => {
            error.innerHTML = `Pesquisa realizada com sucesso!`
            if (idade >= 70) {
                alert(`Legal vc já pode se aposentar, os homens no brasil se aposentam com 70 anos e vc tem ${idades[idades.length - 1]}`)
            } else {
                alert(`Que pena vc n pode se aposentar, os homens no brasil se aposentam com 70 anos e vc tem ${idades[idades.length - 1]}`)
            }
        }, "2000")
    }
    age.value = ``
}
}

function woman() {

    if (age.value == ``){
        var erro = true
        var idade = Number(age.value)
    
        if (Number.isNaN(idade)){
            error.innerHTML = 'Pesquisando...'
            erro = false
            setTimeout(() => {
                alert(`idade invalida`)
                error.innerHTML = `Erro na pesquisa`
                console.error(`Erro \nidade invalida`)
            }, "2000")
        }
    
        if (erro){
            error.innerHTML = 'Pesquisando...'

            setTimeout(() => {
                error.innerHTML = `Pesquisa realizada com sucesso!`
                if (idade >= 60) {
                    alert(`Legal vc já pode se aposentar, as mulheres no brasil se aposentam com 60 anos e vc tem ${idades[idades.length - 1]}`)
                } else {
                    alert(`Que pena vc n pode se aposentar, as mulheres no brasil se aposentam com 60 anos e vc tem ${idades[idades.length - 1]}`)
                }
            }, "2000")
        }
        age.value = ``
    } else {
        var erro = true
        var idade = Number(age.value)
        
        if (Number.isNaN(idade)){
            error.innerHTML = 'Pesquisando...'
            erro = false
            setTimeout(() => {
                alert(`idade invalida`)
                error.innerHTML = `Erro na pesquisa`
            console.error(`Erro \nidade invalida`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Pesquisando...'
        
        idades.push(idade)
        setTimeout(() => {
            error.innerHTML = `Pesquisa realizada com sucesso!`
            if (idade >= 60) {
                alert(`Legal vc já pode se aposentar, as mulheres no brasil se aposentam com 60 anos e vc tem ${idades[idades.length - 1]}`)
            } else {
                alert(`Que pena vc n pode se aposentar, as mulheres no brasil se aposentam com 60 anos e vc tem ${idades[idades.length - 1]}`)
            }
        }, "2000")
    }
    age.value = ``
}
}