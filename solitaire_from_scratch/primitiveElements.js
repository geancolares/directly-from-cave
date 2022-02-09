class Rectangle{
    constructor(x,y,width,height,color,isFilled=true,hasBorder=false,borderColor='#000'){
        this.x = x + 1
        this.y = y + 1
        this.width = width
        this.height = height
        this.color = color
        this.isFilled = isFilled
        this.hasBorder = hasBorder
        this.borderColor = borderColor
        let path = new Path2D()
            path.rect(this.x,this.y,this.width,this.height)
            path.closePath()
        this.path = path
    }
    draw(context){
        if(this.isFilled){
            context.fillStyle = this.color
            context.fill(this.path)
        }
        if(this.hasBorder){
            context.strokeStyle = this.borderColor
            context.stroke(this.path)
        }
        let path = new Path2D()
            path.rect(this.x,this.y,this.width,this.height)
            path.closePath()
        this.path = path
    }
}

class Circle{
    constructor(x,y,radius,color,isFilled=true,hasBorder=false,borderColor='#000'){
        this.x = x + 1
        this.y = y + 1
        this.radius = radius
        this.color = color
        this.isFilled = isFilled
        this.hasBorder = hasBorder
        this.borderColor = borderColor
        let path = new Path2D()
            path.arc(this.x,this.y,this.radius,0,2*Math.PI)
            path.closePath()
        this.path = path
    }
    draw(context){
        if(this.isFilled){
            context.fillStyle = this.color
            context.fill(this.path)
        }
        if(this.hasBorder){
            context.strokeStyle = this.borderColor
            context.stroke(this.path)
        }
        let path = new Path2D()
            path.arc(this.x,this.y,this.radius,0,2*Math.PI)
            path.closePath()
        this.path = path
    }
}