window.addEventListener('load', relogio)

function relogio() {
    var data = new Date()
    var hor = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var hora = `${hor}:${min}:${seg}`
    if (hor < 10) {
        hora = `0${hor}:${min}:${seg}`
    }
    if (min < 10) {
        hora = `${hor}:0${min}:${seg}`
    }
    if (seg < 10) {
        hora = `${hor}:${min}:0${seg}`
    }
    
    document.querySelector('input#relogio').value = `${hora}`
}

setInterval(relogio, 1000)