var points = visiblePoints = pointIntensities = pointRgbs = []

const Z_VECTOR = [0,0,-1]
var lightPoint = [50,-50,-2000]

var blockSize = 2
var xPos = yPos = 0
var  offsetx = 100, offsety = 100

function produtscl(v1, v2){
    return v1[0]*v2[0]+v1[1]*v2[1]+v1[2]*v2[2]
}

function precise(number,decimals){
    return Math.round(number*10**decimals)/10**decimals
}

function coordinates(pixelDensity){
    let radius = 100
    let points = []
    let z
    for(let x=-radius; x<=radius; x+=pixelDensity){
        for(let y=-radius; y<=radius; y+=pixelDensity){
            z = -Math.sqrt(radius**2 -x**2 -y**2)
            z = precise(z,5)
            if(!isNaN(z)){
                points.push([x,y,z])
            }
        }
    }
    return points
}

function pointIntensity(lightPosition,point){
    let intensity = produtscl(lightPosition,point)
    return intensity
}

function pointRgb(intensity,minIntensity,maxIntensity){
    let rgb = ((intensity-minIntensity)*255)/(maxIntensity-minIntensity)
    return rgb
}

function setPointVectors(){
    pointIntensities = []
    visiblePoints.forEach(x=>{
        pointIntensities.push(pointIntensity(lightPoint,x))
    })

    let minIntensity = Math.min(...pointIntensities)
    let maxIntensity = Math.max(...pointIntensities)

    pointRgbs = []
    pointIntensities.forEach(x=>{
        pointRgbs.push(pointRgb(x,minIntensity,maxIntensity))
    })
}

function init(){
    points = coordinates(blockSize)

    points.forEach(x=>{
        if(produtscl(Z_VECTOR,x)>0){
            visiblePoints.push(x)
        }
    })

    setPointVectors()
}

function update(){
    ctx.clearRect(0,0,cnv.width,cnv.height)

    for(let i=0; i<visiblePoints.length; i++){
        ctx.fillStyle = 'rgb('+0+','+pointRgbs[i]+','+0+')'
        ctx.fillRect(xPos+visiblePoints[i][0]+offsetx,yPos+visiblePoints[i][1]+offsety,blockSize,blockSize)
    }

    ctx.fillStyle = 'rgb('+255+','+0+','+255+')'
    ctx.fillRect(offsetx+lightPoint[0]-2,offsety+lightPoint[1]-2,4,4)

    setPointVectors()
}

init()

var timer = setInterval(update,1000/24)