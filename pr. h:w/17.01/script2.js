var input = prompt("Գրեք թիվ");
var tiv = parseFloat(input);

if (isNaN(tiv)) {
    alert("Խնդրում ենք մուտքագրել վավեր թիվ:");
} else {

    if (tiv > 0) {
        alert("Դրական թիվ է:");
    } else if (tiv < 0) {
        alert("Բացասական թիվ է:");
    } else {
        alert("Զրո է");
    }

    if (tiv % 1 === 0) {
        alert("Այս թիվը կլոր է:");
    } else {
        alert("Տասնորդական թիվ է:");
    }
}