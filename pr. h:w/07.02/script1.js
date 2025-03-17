
var box = document.getElementById('color');

var colors = {
    click: "blue",
    mousedown: "yellow",
    mouseleave: "grey",
    mouseenter: "green",
    dblclick: "black"
};

function color(event) {
    var color = colors[event.type];
    if (color) {
        box.style.background = color;
    }
}

box.addEventListener('click', color);
box.addEventListener('mousedown', color);
box.addEventListener('mouseleave', color);
box.addEventListener('mouseenter', color);
box.addEventListener('dblclick', color);