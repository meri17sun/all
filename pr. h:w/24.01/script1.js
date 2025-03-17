var tver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tiv = 0;

for (var i = 0; i < tver.length; i++) {
    var arjeq = true;

    if (tver[i] <= 1) {
        arjeq = false;
    } else {
        for (var j = 2; j <= Math.sqrt(tver[i]); j++) {
            if (tver[i] % j === 0) {
                arjeq = false;
                break;
            }
        }
    }

    if (arjeq) {
        tiv++;
    }
}

console.log("Պարզ թվերի քանակը՝", tiv); // Արդյունքը 4 (2, 3, 5, 7)