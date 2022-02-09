const cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
const naipeNames = ['HEARTS','SPADES','DIAMONDS','CLUBS']

class Card{
    constructor(x,y,naipe,value){
        this.x = x + 1
        this.y = y + 1
        this.color = '#FFF'
        this.width = 150
        this.height = 200
        naipe = naipe.toLowerCase()
        naipe = {
            name:naipe
        }
        switch(naipe.name){
            case 'hearts':{
                naipe.unicode = '\u2665'
                naipe.color = '#f00'
                break
            }
            case 'spades':{
                naipe.unicode = '\u2660'
                naipe.color = '#000'
                break
            }
            case 'diamonds':{
                naipe.unicode = '\u2666'
                naipe.color = '#f00'
                break
            }
            case 'clubs':{
                naipe.unicode = '\u2663'
                naipe.color = '#000'
                break
            }
        }
        naipe.offset = {
            x:5,
            y:40
        }
        this.naipe = naipe

        value = value.toLowerCase()
        value = {
            value:value
        }
        switch(value.value){
            case '2':case '3':case '4':case '5':
            case '6':case '7':case '8':case '9':{
                value.offset = {
                    x:10,
                    y:20
                }
                break
            }
            case '10':{
                value.offset = {
                    x:5,
                    y:20
                }
                break
            }
            case 'a':case 'j':case 'q':case 'k':{
                value.offset = {
                    x:8,
                    y:20
                }
                break
            }
        }
        value.color = '#000'
        this.value = value

        let path = new Path2D()
            path.rect(this.x,this.y,this.width,this.height)
            path.closePath()
        this.path = path
    }

    draw(context){
        context.fillStyle = this.color
        context.fill(this.path)
        context.stroke(this.path)

        context.font = '20px times new roman'
        context.fillStyle = this.value.color
        context.fillText(this.value.value.toUpperCase(),this.x+this.value.offset.x,this.y+this.value.offset.y)
        
        context.font = '30px times new roman'
        context.fillStyle = this.naipe.color
        context.fillText(this.naipe.unicode,this.x+this.naipe.offset.x,this.y+this.naipe.offset.y)
        context.font = '60px times new roman'
        context.fillText(this.naipe.unicode,this.x+this.naipe.offset.x+(this.width/2)-25,this.y+this.naipe.offset.y+(this.height/2)-20)
        
        let path = new Path2D()
            path.rect(this.x,this.y,this.width,this.height)
            path.closePath()
        this.path = path
    }
}