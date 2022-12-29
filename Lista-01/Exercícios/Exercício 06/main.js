var endereco = []

function onde(){
    var erro = true
    var num = Number(nums.value)

    if (!isNaN(ruas.value)){
        error.innerHTML = 'Cadastrando...'
        erro = false
        setTimeout(() => {
            alert(`Rua invalida`)
            error.innerHTML = `Erro`
            console.error(`Erro \nrua invalida`)
        }, "2000")
    }
    if (Number.isNaN(num)){
        error.innerHTML = 'Cadastrando...'
        erro = false
        setTimeout(() => {
            alert(`Numero invalido`)
            error.innerHTML = `Erro`
            console.error(`Erro \nnumero invalido`)
        }, "2000")
    }

    if (erro){
        error.innerHTML = 'Cadastrando...'
        var usuario = {rua: ``, numero: ``}
        usuario.rua = ruas.value
        usuario.numero = Number(nums.value)
        
        endereco.push(usuario)
        setTimeout(() => {
            error.innerHTML = `Cadastro realizado com sucesso!`
            alert(`Seu logradouro é ${endereco[endereco.length - 1].rua}`)
            alert(`O número do seu logradouro é ${endereco[endereco.length - 1].numero}`)
        }, "2000")
    }
    ruas.value = ``
    nums.value = ``
}