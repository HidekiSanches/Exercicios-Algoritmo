function pare() {
    error.innerHTML = `<br>Pare e aguarde!`
    setTimeout(()=> {
        error.innerHTML = ``
    }, "2000")
}
function pense() {
    error.innerHTML = `<br>Pense se pode seguir ou se deve parar!`
    setTimeout(()=> {
        error.innerHTML = ``
    }, "2000")
}
function siga() {
    error.innerHTML = `<br>Pode seguir adiante :)`
    setTimeout(()=> {
        error.innerHTML = ``
    }, "2000")
}
