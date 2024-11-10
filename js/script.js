// EVENT

let onBtn = document.querySelector('.light .onBtn')
let light = document.querySelector('.lightImg')

function turnOn(){
light.src = "./images/on.png"
}

onBtn.addEventListener('click', turnOn)

let offBtn = document.querySelector('.light .offBtn')

function turnOff(){
    light.src = "./images/off.png"
}

offBtn.addEventListener('click', turnOff)