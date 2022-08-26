window.addEventListener('load', relogio)

function relogio() {
    var data = new Date()
    var hor = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var hora = `${hor}:${min}:${seg}`
    document.querySelector('input#relogio').value = `${hora}`
}

setInterval(relogio, 1000)