var cadastro = []

function cadastrar(){
    var erro = true
    var anos = Number(ano.value)

    if (!isNaN(cidade.value)){
        error.innerHTML = 'Cadastrando...'
        erro = false
        setTimeout(() => {
            alert(`Cidade Natal invalida`)
            error.innerHTML = `Erro`
            console.error(`Erro \ncidade invalida`)
        }, "2000")
    }
    if (Number.isNaN(anos)){
        error.innerHTML = 'Cadastrando...'
        erro = false
        setTimeout(() => {
            alert(`Ano de nascimento invalido`)
            error.innerHTML = `Erro`
            console.error(`Erro \nano invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Cadastrando...'
        var usuario = {cidade: ``, ano: ``}
        usuario.cidade = cidade.value
        usuario.ano = Number(ano.value)
        
        cadastro.push(usuario)
        setTimeout(() => {
            error.innerHTML = `Cadastro realizado com sucesso!`
            alert(`Você nasceu na cidade de ${cadastro[cadastro.length - 1].cidade} em ${cadastro[cadastro.length - 1].ano}`)
        }, "2000")
    }
    cidade.value = ``
    ano.value = ``
}