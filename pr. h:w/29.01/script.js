
var mardik = [
    { name: "Անի", age: 25, city: "Երևան" },
    { name: "Արամ", age: 30, city: "Գյումրի" },
    { name: "Լուսինե", age: 22, city: "Վանաձոր" },
    { name: "Գոռ", age: 28, city: "Հրազդան" },
    { name: "Մարիա", age: 27, city: "Աբովյան" },
    { name: "Տիգրան", age: 35, city: "Երևան" },
    { name: "Նարինե", age: 24, city: "Սպիտակ" },
    { name: "Վահե", age: 29, city: "Արմավիր" },
    { name: "Մարիամ", age: 26, city: "Արտաշատ" },
    { name: "Մարկ", age: 31, city: "Կապան" }
];

document.write("<h2>Անձանց ցուցակ</h2>");

mardik.forEach(mard => {
    document.write("<ul>");
    for (let key in mard) {
        document.write(`<li><strong>${key}:</strong> ${mard[key]}</li>`);
    }
    document.write("</ul>");
});