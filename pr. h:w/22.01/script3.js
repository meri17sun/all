
var tver = [1, 4, 7, 10, 13, 16, 19, 22];

var sum1 = 0;
var sum2 = 0;

//forEach-ը օգտագործում ենք զանգվածի յուրաքանչյուր տարրի համար ֆունկցիա կատարելու համար
tver.forEach(tiv => {
    if (tiv % 2 === 0) {
        sum1 += tiv;
    } else {
        sum2 += tiv;
    }
});

var message = '';
if (sum1 > sum2) {
    message = `Զանգվածի զույգ թվերի գումարը(${sum1}) մեծ է կենտ թվերի գումարից:(${sum2})`;
} else if (sum2 > sum1) {
    message = `Զանգվածի կենտ թվերի գումարը(${sum2}) մեծ է զույգ թվերի գումարից:(${sum1})`;
} else {
    message = `Զույգ և կենտ թվերի գումարները համասար են:(${sum1})`;
}

alert(message);
console.log(message);