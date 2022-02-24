function moviment(event){
    switch(event.key.toLowerCase()){
        case 'arrowdown':{
            yPos+=2
            lightPoint[1]-=2
            break
        }
        case 'arrowup':{
            yPos-=2
            lightPoint[1]+=2
            break
        }
        case 'arrowleft':{
            xPos-=2
            lightPoint[0]+=2
            break
        }
        case 'arrowright':{
            xPos+=2
            lightPoint[0]-=2
            break
        }
    }
}

cnv.addEventListener('mousemove',function(event){
    console.log(Math.random())
    lightPoint = [event.layerX-100-xPos,event.layerY-100-yPos,-150]})

document.addEventListener('keydown',moviment)