var tiv = prompt("Գրեք թիվ:");

if (tiv >= 0 && tiv < 10) {
    alert("Ձեր թիվը միանիշ թիվ է:");
} else if (tiv >= 10 && tiv < 100) {
    alert("Ձեր թիվը երկնիշ թիվ է:");
} else if (tiv >= 100 && tiv < 1000) {
    alert("Ձեր թիվը եռանիշ թիվ է:");
} else if (tiv >= 1000 && tiv < 10000) {
    alert("Ձեր թիվը քառանիշ թիվ է:");
} else if (tiv >= 10000 && tiv < 100000) {
    alert("Ձեր թիվը հնգանիշ թիվ է:");
} else if (tiv >= 100000 && tiv < 1000000) {
    alert("Ձեր թիվը վեցանիշ թիվ է:");
} else if (tiv >= 1000000) {
    alert("Ձեր թիվը բարձր է միլիոնից:");
} else {
    alert("Մուտքագրեք վավեր թիվ:");
}
