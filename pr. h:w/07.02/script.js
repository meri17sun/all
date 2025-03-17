
var boxes = document.querySelectorAll('.box');
var button = document.getElementById('button');


button.addEventListener('click', () => {
  var random = Math.floor(Math.random() * boxes.length);

  var color = `rgb(
  ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`;

  boxes[random].style.backgroundColor = color;
});