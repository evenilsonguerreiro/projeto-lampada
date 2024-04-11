const On = document.getElementById('on')
const Off = document.getElementById('off')
const lamp = document.getElementById('lamp')
const text = document.getElementById('text')


function ligar(){
  lamp.src = './img/ligada.jpg' 
  text.innerHTML = 'lampada  accessa'
  text.style.color = 'yellow'

}

function desligar(){
    lamp.src = './img/desligada.jpg'
    text.innerHTML = 'lampada  apagada'
    document.body.style.backgroundColor = 'white'
    text.style.color = 'black'
}



On.addEventListener('click', ligar)
Off.addEventListener('click', desligar)