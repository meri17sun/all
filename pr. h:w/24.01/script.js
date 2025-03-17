var tiv = parseInt(prompt("Մուտքագրեք թիվը:"), 10);

if (isNaN(tiv)) {
    alert("Խնդրում եմ մուտքագրեք վավեր թիվ։");
} else if (tiv <= 1) {
    alert(`${tiv}-ը պարզ թիվ չէ։`);
} else if (tiv === 2) {
    alert(`${tiv}-ը պարզ թիվ է։`);
} else if (tiv % 2 === 0) {
    alert(`${tiv}-ը բաղադրյալ թիվ է։`);
} else {
    var arjeq = true;
    for (var i = 3; i <= Math.sqrt(tiv); i += 2) {
        if (tiv % i === 0) {
            arjeq = false;
            break;
        }
    }

    if (arjeq) {
        alert(`${tiv}-ը պարզ թիվ է։`);
    } else {
        alert(`${tiv}-ը բաղադրյալ թիվ է։`);
    }
}