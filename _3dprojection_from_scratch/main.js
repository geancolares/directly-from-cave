var points = []
var visiblePoints = []
var pointIntensities = []
var pointRgbs = []

const Z_VECTOR = [0,0,-1]
var lightPoint = [70,-50,-150]

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
    for(let x=-radius; x<=radius; x+=pixelDensity){
        for(let y=-radius; y<=radius; y+=pixelDensity){
            let z = - Math.sqrt(radius**2 - x**2 - y **2)
            z = precise(z,5)
            if(!isNaN(z)){
                console.log(x,y,z)
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
    let rgb = ((intensity-minIntensity)*250)/(maxIntensity-minIntensity)
    return rgb
}

function init(){
    points = coordinates(2)
    console.log(points)
    points.forEach(x=>{
        if(produtscl(Z_VECTOR,x)>0){
            visiblePoints.push([x[0],x[1],x[2]])
        }
    })
    visiblePoints.forEach(x=>{
        pointIntensities.push(pointIntensity(lightPoint,x))
    })

    let minIntensity = Math.min(...pointIntensities)
    let maxIntensity = Math.max(...pointIntensities)

    pointIntensities.forEach(x=>{
        pointRgbs.push(pointRgb(x,minIntensity,maxIntensity))
    })
}

function update(){
    for(let i=0; i<visiblePoints.length; i++){
        ctx.fillStyle = 'rgb('+pointRgbs[i]+100+','+0+','+0+')'
        ctx.fillRect(visiblePoints[i][0]+offsetx,visiblePoints[i][1]+offsety,2,2)
    }
}

init()

var timer = setInterval(update,1000/24)
