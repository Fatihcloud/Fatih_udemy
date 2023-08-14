function topla(x,y){
    return x+y;
}
topla(4,5)

function topla2(x:number,y:number):number{
    return x+y;
}

topla2(5,3)

let topla3 = function(x:number,y:number):number{
    return x+y;
}

console.log(topla(3,5));
console.log(topla("ankara",2));
console.log(topla2(2,5));
console.log(topla3(6,7));

let topla4 = function(x:number,y:number=2):number{
    return x+y;
}
console.log(topla4(6));

let topla5 = function(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x
}
console.log(topla5(6));

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("fatih","mehmet","ahmet"))

function davetEt1(...digerleri:string[]):string{
    return digerleri.join(" ");
}
console.log(davetEt1("fatih","mehmet","ahmet"))