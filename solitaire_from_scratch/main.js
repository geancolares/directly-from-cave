var elemSelected
var elemOrder = []
var clicking = false

var area1
var area2
var area3
var area4
var backgroundGame

function init(){
    // area1 = new Circle(250,250-50,50,'#F9D030') //Rectangle(0,0,100,100,'#00f')
    // area2 = new Circle(250,250+50,50,'#F62AA0') //Rectangle(50,0,100,100,'#f00')
    // area3 = new Circle(250-50,250,50,'#B8EE30')
    // area4 = new Circle(250+50,250,50,'#26DFD0')
    backgroundGame = new Rectangle(0,0,cnv.width,cnv.height,'#0D2E06')

    //exCard = new Card(50,50,'clubs','10')
    var deck = []

    //CRIA DECK 
    var initPositionDeck = {
        x:100,
        y:100
    }

    let d = 0
    naipeNames.forEach(x=>{
        cardValues.forEach(y=>{
            deck.push(new Card(initPositionDeck.x - d,initPositionDeck.y - d,x,y))
            if(d!=30){
                d+=3
            }
        })
    })

    //EMPILHA NA ORDEM DE ELEMENTOS
    for(let element of Object.assign([],deck).reverse()){
        elemOrder.unshift(element)
    }

    // elemOrder.unshift(area1)
    // elemOrder.unshift(area2)
    // elemOrder.unshift(area3)
    // elemOrder.unshift(area4)
    //elemOrder.unshift(exCard)
}

function update(){
    ctx.clearRect(0,0,cnv.width,cnv.height)

    backgroundGame.draw(ctx)

    let elemOrderAux = Object.assign([],elemOrder).reverse()
    for(let element of elemOrderAux){
        element.draw(ctx)
    }
}

init()

var timer = setInterval(update,1000/30)