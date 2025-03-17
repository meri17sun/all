function openpopup(icon, text, text1) {
    document.getElementById("icon").className = `fa-solid ${icon}`;
    document.getElementById("text").innerText = text;
    document.getElementById("text1").innerText = text1;
    
    document.getElementById("popup").classList.add("active1");
    document.querySelector(".window").classList.add("active2");
}

function closepopup() {
    document.getElementById("popup").classList.remove("active1");
    document.querySelector(".window").classList.remove("active2");
}


