const cols = document.querySelectorAll('.col')

function gerenerateRandomColor() {
//RGB
//#FF0000
//#00FF00
//#0000FF
const hexCodes = '123456789ABCDEF'
let color = ''
for (let i=0; i < 6; i++) {
 color += hexCodes [Math.floor(Math.random() * hexCodes.length)]    
}
return '#' + color
}

function setRandomColors() {
    cols.forEach((col) => { 
    const text = col.querySelector('h2')
    const color = chroma.random()

    text.textContent = color
     col.style.background = color  
     setTexstColor(text, color)
    })
}

function setTexstColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white' 
}

setRandomColors()

 