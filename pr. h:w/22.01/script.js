//ստեղծում ենք զանգված 15 պատահական թվերով (0-ից 100)
var tver = [];
for (var i = 0; i < 15; i++) {
    tver.push(Math.floor(Math.random() * 101));
}

console.log("Զանգվածը:", tver);

console.log("Զույգ թվերը:");
//զույգ թվերը տպելու համար օգտագործում ենք for ցիկլը. .lenght-նիշերի քանակ
for (var i = 0; i < tver.length; i++) {
    if (tver[i] % 2 === 0) {
        console.log(tver[i]);
    }
}

