var tiv = parseInt(prompt("Մուտքագրեք թիվ:"));

if (!isNaN(tiv) && tiv > 0) {
  for (var i = tiv; i >= 1; i--) {
    console.log(i);
  }
} else {
  console.log("Խնդրում եմ մուտքագրեք դրական ամբողջ թիվ:");
}