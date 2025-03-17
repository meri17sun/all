document.getElementById("nor").addEventListener("scroll", function (tuk) {
    var a = Math.round(tuk.target.scrollTop);
    console.log(a);

    var color = Math.floor(a / 50) % 2;

    if (color === 0) {
        tuk.target.style.cssText = `
            background: red;
            color: white;
            width: 500px;
            height: 400px;
            overflow: scroll;
            border: 1px solid;
        `;
    } else {
        tuk.target.style.cssText = `
            background: blue;
            color: white;
            width: 500px;
            height: 400px;
            overflow: scroll;
            border: 1px solid;
        `;
    }
});