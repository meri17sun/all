
var tver = [3, 4, 7, 10, 13, 17, 20, 23];
let sum = 0;

for (var i = 0; i < tver.length; i++) {
    var num = tver[i];
    var parzTiv = true;

    if (num <= 1) {
        parzTiv = false;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                parzTiv = false;
                break;
            }
        }
    }

    if (parzTiv) {
        sum += num;
    }
}

console.log("Պարզ թվերի գումարը՝", sum);