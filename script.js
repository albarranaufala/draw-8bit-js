let color, red = 0, green = 0, blue = 0
redEl = document.getElementById('red')
greenEl = document.getElementById('green')
blueEl = document.getElementById('blue')
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
        document.getElementById(i).addEventListener('touchstart', function(e){
            e.target.style.backgroundColor = color
            isDownListener = true
            document.querySelector('body').classList.add('lockscreen')
        })
        document.getElementById(i).addEventListener('touchmove', function(e){
            if(isDownListener){
                let element = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
                if(element.getAttribute('id') >= 1 && element.getAttribute('id') <= 256){
                    element.style.backgroundColor = color
                }
            }
        })
        document.getElementById(i).addEventListener('touchend', function(e){
            isDownListener = false
            document.querySelector('body').classList.remove('lockscreen')
        })
    }
}

redEl.addEventListener('input', changeColor)
greenEl.addEventListener('input', changeColor)
blueEl.addEventListener('input', changeColor)

function changeColor(){
    red = redEl.value
    green = greenEl.value
    blue = blueEl.value
    resultColor = document.querySelector('.result-color')
    color = 'rgb('+red+','+green+','+blue+')'
    oppositeColor = 'rgb('+(255-red)+','+(255-green)+','+(255-blue)+')'
    resultColor.style.backgroundColor = color
    resultColor.style.color = oppositeColor
}