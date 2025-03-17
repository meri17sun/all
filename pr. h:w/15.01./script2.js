var text = prompt("✍");

if (text === null) {
    alert("ok");
} else if (text === "") {
    alert("no");
} else if (!isNaN(text)) {
    alert("ok, թիվը: " + text);
} else {
    alert("no");
}