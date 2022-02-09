  class apple{
    constructor(avoidedArea){
        let position
        do{
            position=[Math.floor(Math.random()*20),Math.floor(Math.random()*20)]
        }while(isin(position,avoidedArea))
        this.position=position
        this.size=25
    }
    draw(context){
        //DESENHA MAÇÃ
        context.beginPath()
        context.arc(this.position[0]*this.size+Math.floor(this.size/2),
                    this.position[1]*this.size+Math.floor(this.size/2),
                    Math.floor(this.size/2),0,2*Math.PI)
        context.closePath()
        context.fillStyle='#FF0000'
        context.fill()
    }
}
class snake{
    constructor(position){
        this.position=position
        this.size=25
        this.direction=''
        this.hasAte=0
        this.body=[]
    }
    draw(context){
        //DESENHA O CORPO DA COBRA
        for(let i=0;i<this.hasAte;i++){
            context.beginPath()
            context.rect(this.body[i][0]*this.size,this.body[i][1]*this.size,this.size,this.size)
            context.closePath()
            context.fillStyle = '#fff'
            context.fill()
        }
        //DESENHA CABEÇA DA COBRA
        context.beginPath()
        context.rect(this.position[0]*this.size,this.position[1]*this.size,this.size,this.size)
        context.closePath()
        context.fillStyle = '#000'
        context.fill()
    }
    slide(){
        var aux = Object.assign([],this.position)
        //DESLOCA A CABEÇA DA COBRA
        switch(this.direction){
            case 'w':
            case 'arrowup':{
                this.position[1]--
                break
            }
            case 'd':
            case 'arrowright':{
                this.position[0]++
                break
            }
            case 's':
            case 'arrowdown':{
                this.position[1]++
                break
            }
            case 'a':
            case 'arrowleft':{
                this.position[0]--
                break
            }
        }
        if(this.position[0]<0||this.position[0]>19||
            this.position[1]<0||this.position[1]>19||
            isin(this.position,this.body)){
                gameOver = true
                this.position = aux
        }
        else{
            this.body.unshift(aux)
            if(this.body.length>this.hasAte){
                this.body.pop()
            }
        }
    }
}