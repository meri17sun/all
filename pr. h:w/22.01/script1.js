//սահամանում ենք զանգվածի տարրերի քանակը և միջակայքը
var qanak = 10;
var min = -50;
var max = 50;

var tver = [];
for (var i = 0; i < qanak; i++) {

    //.floor կլորացնում է թիվը
    var tiv = Math.floor(Math.random() * (max - min + 1)) + min;
    
    //զանգվածի վերջում տարր/եր է ավելացնում
    tver.push(tiv);
}

console.log("Սկզբնական զանգվածը:", tver);

console.log("Հակառակ զանգվածը:");
for (var i = tver.length - 1; i >= 0; i--) {
    console.log(tver[i]);
}


//կամ ըստ պահանջի, խառը թվերով զանգված, տպվում է հակառակ, առանց ավելորդ արտահայտությունների ու error-ների

//var numbers = [5, 12, -3, 8, 0, 22, -7];

//for (let i = numbers.length - 1; i >= 0; i--) {
//    console.log(numbers[i]);
//}