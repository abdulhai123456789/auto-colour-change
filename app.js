let body = document.getElementById('body')
let showcolorcode= document.getElementById('code')
function randomcolor(){
    let color1= Math.round(Math.random()*255)
    let color2= Math.round(Math.random()*255)
    let color3= Math.round(Math.random()*255)
    showcolorcode.innerText = `rgb(${color1},${color2},${color3})`
    return `rgb(${color1},${color2},${color3})`
}
setInterval(()=>(
body.style.backgroundColor = randomcolor()
), 10)  