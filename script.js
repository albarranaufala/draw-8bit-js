let color, red = 0, green = 0, blue = 0
init()
pixelListener()

function init(){
    let id = 0
    let script = ''
    for(let i = 0; i < 16; i++){
        script += '<tr>'
        for(let j = 0; j < 16; j++){
            script += '<td id='+id+'></td>'
            id++
        }
        script += '</tr>'
    }
    resultColor = document.querySelector('.result-color')
    color = 'rgb('+red+','+green+','+blue+')'
    oppositeColor = 'rgb('+(255-red)+','+(255-green)+','+(255-blue)+')'
    resultColor.style.backgroundColor = color
    resultColor.style.color = oppositeColor
    document.querySelector('table').innerHTML = script
}

function pixelListener(){
    let isDownListener = false
    for(let i = 0; i < 256; i++){
        document.getElementById(i).addEventListener('mousedown', function(e){
            e.target.style.backgroundColor = color
            isDownListener = true
        })
        document.getElementById(i).addEventListener('mousemove', function(e){
            if(isDownListener){
                e.target.style.backgroundColor = color
            }
        })
        document.getElementById(i).addEventListener('mouseup', function(e){
            isDownListener = false
        })
    }
}

document.getElementById('red').addEventListener('input', function(e){
    red = e.target.value
    resultColor = document.querySelector('.result-color')
    color = 'rgb('+red+','+green+','+blue+')'
    oppositeColor = 'rgb('+(255-red)+','+(255-green)+','+(255-blue)+')'
    resultColor.style.backgroundColor = color
    resultColor.style.color = oppositeColor
})
document.getElementById('green').addEventListener('input', function(e){
    green = e.target.value
    resultColor = document.querySelector('.result-color')
    color = 'rgb('+red+','+green+','+blue+')'
    oppositeColor = 'rgb('+(255-red)+','+(255-green)+','+(255-blue)+')'
    resultColor.style.backgroundColor = color
    resultColor.style.color = oppositeColor
})
document.getElementById('blue').addEventListener('input', function(e){
    blue = e.target.value
    resultColor = document.querySelector('.result-color')
    color = 'rgb('+red+','+green+','+blue+')'
    oppositeColor = 'rgb('+(255-red)+','+(255-green)+','+(255-blue)+')'
    resultColor.style.backgroundColor = color
    resultColor.style.color = oppositeColor
})