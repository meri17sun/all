
var tiv = parseInt(prompt("Մուտքագրեք թիվ:"));

var tver = [10, 15, 20, 25, 30, 35, 40, 45, 50];

var heracnel = tver.filter(num => num % tiv !== 0);

console.log("Սկզբնական զանգվածը:", tver);
console.log("Փոփոխված զանգվածը:", heracnel);