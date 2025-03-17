document.getElementById("save").addEventListener("click", function () {
    var data = {
        brand: document.getElementById("brand").value,
        model: document.getElementById("model").value,
        color: document.getElementById("color").value,
        power: document.getElementById("power").value,
        price: document.getElementById("price").value
    };

    console.log(data);

    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("color").value = "";
    document.getElementById("power").value = "";
    document.getElementById("price").value = "";
});
