document.addEventListener("DOMContentLoaded", function () {
    var puchur = document.getElementById("puchur");
    var dary = document.querySelector(".dary");

    document.addEventListener("mousemove", function () {
        var rect = dary.getBoundingClientRect();

        if (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        ) {
            puchur.style.left = `${event.clientX}px`;
            puchur.style.top = `${event.clientY}px`;
        }
    });
});