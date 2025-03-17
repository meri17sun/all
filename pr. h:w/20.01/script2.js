
var win = prompt("Մուտքագրեք թիվը՝");
var tiv = parseInt(win);

if (isNaN(tiv) || tiv < 1) {
  alert("Խնդրում եմ մուտքագրեք 1-ից մեծ ամբողջ թիվ։");
} else {
  var sum = (tiv * (tiv + 1)) / 2;
  alert(`1-ից մինչև ${tiv} թվերի գումարը՝ ${sum} է:`);
}