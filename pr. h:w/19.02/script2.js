function dariHamar(event) {
    
    var x = event.clientX;
    var y = event.clientY;

    var newDiv = document.createElement("div");
    newDiv.classList.add("qaxcr");

    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    var randomWidth = Math.floor(Math.random() * window.innerWidth); 
    var randomHeight = Math.floor(Math.random() * window.innerHeight);

    newDiv.style.backgroundColor = randomColor;
    newDiv.style.width = randomWidth + "px";
    newDiv.style.height = randomHeight + "px";
    newDiv.style.left = x + "px";
    newDiv.style.top = y + "px";

    document.querySelector(".dary").appendChild(newDiv);
}