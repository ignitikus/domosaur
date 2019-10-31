document.querySelector('.mess-with-me').style.fontSize = '3em'
document.querySelector('.mess-with-me').style.backgroundColor = 'lightgreen'
document.querySelector('img').style.width = '324px'
document.querySelector('#hide-me-area').style.display = 'none'
function redBorder(event){
   event.target.style.border = '5px solid red'
}
document.querySelector('img').addEventListener('click', redBorder)
function halfOpacity(event){
    event.target.style.opacity = '0.5'
}
document.querySelector('#feathers').addEventListener('click', halfOpacity)
function padRight(event){
    event.target.style.paddingRight = '100px';
}
document.querySelector('#rattle').addEventListener('click', padRight)
function something(){
    document.querySelector('#row').style.backgroundColor = 'orange'
}
function something2 () {
    document.querySelector('#row').style.backgroundColor = 'white'
}
function clicky(){
    if (document.querySelector('#row').style.backgroundColor !== 'white'){
    something2()
    } else {
    something()
    }
}
document.querySelector('#toggle').addEventListener('click', clicky)

function makesBig (event) {
    event.target.style.width = '200px'

}

function returnsToNormal (event) {
    event.target.style.width = '162px'
}

document.querySelector('#biggify').addEventListener('mouseover', makesBig)
document.querySelector('#biggify').addEventListener('mouseout', returnsToNormal)