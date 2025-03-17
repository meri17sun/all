var div = document.getElementById("nor");
var scrollUp = document.getElementById("scrollUp");
var scrollDown = document.getElementById("scrollDown");

scrollUp.addEventListener("click", function () {
    div.scrollTop -= 20;
});

scrollDown.addEventListener("click", function () {
    div.scrollTop += 20;
});