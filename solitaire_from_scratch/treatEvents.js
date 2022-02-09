function moviment(event){
    //if(clicking){
        elemSelected.x = event.layerX - elemSelected.offsetX
        elemSelected.y = event.layerY - elemSelected.offsetY
    //}
    console.log('mousemove',clicking)
    console.log('x:',elemSelected.x,'y:',elemSelected.y)
}

cnv.addEventListener('mousedown',(event)=>{
    for (let element of elemOrder) {
        if (ctx.isPointInPath(element.path, event.layerX, event.layerY)) {
            elemSelected = element
            elemSelected.offsetX = event.layerX - elemSelected.x
            elemSelected.offsetY = event.layerY - elemSelected.y

            //clicking = true
            elemSelected.hasBorder = true
            cnv.addEventListener('mousemove',moviment)
            break
        }
    }
    if(elemSelected){
        let x = isin(elemSelected,elemOrder)[1]
        elemOrder = [elemSelected].concat(elemOrder.slice(0,x).concat(elemOrder.slice(x+1)))
    }
    console.log('mouse down',clicking)
})

cnv.addEventListener('mouseup',(event)=>{
    //clicking = false

    if(elemSelected){
        elemSelected.hasBorder = false
    }

    cnv.removeEventListener('mousemove',moviment)

    console.log('mouse up',clicking)
})

cnv.addEventListener('mouseout',(event)=>{
    //clicking = false

    if(elemSelected){
        elemSelected.hasBorder = false
    }

    cnv.removeEventListener('mousemove',moviment)

    console.log('mouse out',clicking)
})