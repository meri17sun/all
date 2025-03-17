
var dollar = 420;
var euro = 450;
var ruble = 4;

var amd = prompt("Մուտքագրեք գումարը դրամով:");

if (amd && !isNaN(amd)) {
    var arjeq = parseFloat(amd); //փոխարինում է թվային արժեքին

    //to.Fixed-ը կլորացնում է թիվը մինչև 2 նիշ
    var usd = (arjeq / dollar).toFixed(2);
    var eur = (arjeq / euro).toFixed(2);
    var rub = (arjeq / ruble).toFixed(2);

    alert(
        `${arjeq} ՀՀ դրամը հավասար է:\n` +   //(``)-նշանները օգտագործում ենք արդյունքը տպելու համար, (\n)-տեքստը տեղափոխում է նոր տող
        `${usd} ԱՄՆ դոլար\n` +
        `${eur} եվրո\n` +
        `${rub} ռուսական ռուբլի`
    );
} else {
    alert("Խնդրում եմ մուտքագրել վավեր թիվ:");
}
