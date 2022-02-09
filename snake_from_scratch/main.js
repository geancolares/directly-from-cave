//CRIAR INSTÂNCIAS COBRA E MAÇÃ
var mysnake = new snake([9, 9])
mysnake.direction = 'w'
var a = new apple([mysnake.position])

//VARIÁVEIS
var period = 250
var periodLim = 100
var pause = false
var gameOver = false
var presPerFrame = false

//RECEBER ENTRADAS DO MOUSE
document.addEventListener('keydown', function (event) {
    var keyP = event.key.toLowerCase()

    if(!pause&&keyP=='p'){
        pause = true
        keyP = ''

        //PAUSE
        ctx.beginPath()
        ctx.fillStyle = '#f00'
        ctx.fillText('PAUSE',250-50,250)
        ctx.closePath()
    }
    if(pause&&keyP=='p'){
        pause = false
        keyP = ''
    }
    if(!presPerFrame){
        switch(mysnake.direction){
            case 'w':
            case 'arrowup':{
                if(['a','d','arrowleft','arrowright'].includes(keyP)){
                    mysnake.direction=keyP
                }
                break
            }
            case 'd':
            case 'arrowright':{
                if(['w','s','arrowup','arrowdown'].includes(keyP)){
                    mysnake.direction=keyP
                }
                break
            }
            case 's':
            case 'arrowdown':{
                if(['a','d','arrowleft','arrowright'].includes(keyP)){
                    mysnake.direction=keyP
                }
                break
            }
            case 'a':
            case 'arrowleft':{
                if(['w','s','arrowup','arrowdown'].includes(keyP)){
                    mysnake.direction=keyP
                }
                break
            }
        }
    }
    presPerFrame = true
})

//FUNÇÕES
function update() {
    presPerFrame = false

    mysnake.slide()

    console.log('snake position:',mysnake.position,'apple position:',a.position)
    if(equals(mysnake.position,a.position)){
        mysnake.hasAte++
        mysnake.body.unshift(Object.assign([],a.position))
        a = new apple(mysnake.body)
        if(mysnake.hasAte%5==0){
            period*=0.98
            clearInterval(timer)
            timer = setTimer(period,update)
        }
    }

    //LIMPA TELA
    ctx.clearRect(0,0,500,500)

    //BACKGROUND
    ctx.beginPath()
    ctx.fillStyle = '#CCC'
    ctx.rect(0,0,500,500)
    ctx.closePath()
    ctx.fill()

    //CHAMA MÉTODOS DE DESENHO
    mysnake.draw(ctx)
    a.draw(ctx)

    //SCORE
    ctx.beginPath()
    ctx.fillStyle = '#000'
    ctx.lineWidth = '10'
    ctx.font = '20px sans-serif'
    ctx.fillText('score:'+mysnake.hasAte,500-(57+(mysnake.hasAte.toString().length*12)),20)
    ctx.closePath()
}

function setTimer(period,callBack){
    return setInterval(() => {
        if(!gameOver){
            if(!pause){
                callBack()
            }
            else{
                
            }
        }
        else{
            clearInterval(timer)

            //GAME OVER
            ctx.beginPath()
            ctx.fillStyle = '#f00'
            ctx.fillText('GAME OVER',250-60,250)
            ctx.closePath()

            var btn = document.createElement('button')
            btn.innerText = 'RESTART'
            btn.style.position = 'relative';
            btn.style.left = '50%';
            btn.style.transform = 'translate(-50%,0%)';

            document.querySelector('div').appendChild(btn)

            btn.addEventListener('click',() => {
                location.reload()
            })
        }
    }, period);
}

var timer = setTimer(period,update)