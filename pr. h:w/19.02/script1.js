var a = document.getElementById("puchur");

function dariHamar() {
  var x = event.clientX;
  var y = event.clientY;

  a.style.left = `${x - 25}px`;
  a.style.top = `${y - 25}px`;


  var clickedElement = document.elementFromPoint(x, y);

  if (clickedElement.classList.contains('blue')) {
    a.style.background = 'orange';
  } else if (clickedElement.classList.contains('yellow')) {
    a.style.background = 'blue';
  } else if (clickedElement.classList.contains('orange')) {
    a.style.background = 'yellow';
  } else {
    a.style.background = 'black';
  }
}

