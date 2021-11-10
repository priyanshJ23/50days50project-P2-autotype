const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const text = 'Hello I am Priyansh'
let  speed = 300/speedel.value
let index = 1
writetext()
function writetext() {

  textel.innerText  = text.slice(0,index)
  index++
  if(index> text.length)  {
    index = 1
  }
  setTimeout(writetext, speed)
}
speedel.addEventListener('input',(e)=> speed = 300/ e.target.value)
