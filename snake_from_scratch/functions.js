/*var p1 = {
    name:'fulano'
}
var p2 = {
    name:'fulano'
}
var p3 = {
    name:'siclano'
}

var v1 = [0,1]
var v2 = [0,1]
var v3 = [2,3]*/

function equals(obj1,obj2) {
    //console.log('l1',obj1==undefined)
    //console.log('l2',obj2==undefined)
    if(obj1==undefined||obj2==undefined){
        //console.log('l3',obj1==undefined||obj2==undefined)
        //SE NÃO FOREM IGUAIS
        if(obj1!=obj2){
            //console.log('falso 1')
            return false
        }
    }
    else{
        //ATRIBUIR QUANTIDADE DE CHAVES
        var aux1=Object.keys(obj1).length
        //console.log(Object.keys(obj1))
        var aux2=Object.keys(obj2).length
        //console.log(Object.keys(obj2))

        //SE A QUANTIDADE DE CHAVES FOREM DIFERENTES
        if(aux1!=aux2){
            //console.log('falso 2')
            return false
        }

        //SE A QUANTIDADE DE CHAVES FOREM ZERO
        if(aux1==0&&aux2==0){
            if((typeof obj1)!=(typeof obj2)){
                return false
                
            }

            if(((typeof obj1)!='object')&&
                ((typeof obj2)!='object')){
                if(obj1!=obj2){
                    return false
                }
            }
        }
        
        if(aux1!=0&&aux2!=0){
            //COMPARA AS CHAVES
            for(let i=0;i<aux1;i++){
                if(Object.keys(obj1)[i]!=Object.keys(obj2)[i]){
                    //console.log('falso 4')
                    return false
                }
            }

            //ATRIBUIR QUANTIDADE DE CHAVES
            aux1=Object.values(obj1).length
            aux2=Object.values(obj2).length

            //COMPARA OS VALORES
            for(let i=0;i<aux1;i++){
                if(Object.values(obj1)[i]!=Object.values(obj2)[i]){
                    //console.log('falso 5')
                    return false
                }
            }
        }
    }
    return true
}

function isin(objtMin,objtMax){
    for(let element of objtMax){
        if(equals(element,objtMin)){
            return true
        }
    }
    return false
}

/*function isin(smallestObj,bigestObj) {
    
}*/

/*console.log(equals(v1,v1))
console.log(equals(v1,v2))
console.log(equals(v1,v3))
console.log(equals(v2,v3))
console.log(equals(p1,p1))
console.log(equals(p1,p2))
console.log(equals(p1,p3))
console.log(equals(p2,p3))*/