
var mardik = [
    {
        firstname: "Արամ",
        lastname: "Հակոբյան",
        age: 25,
        phone: "+374 91 234567",
        address: "Երևան, Մաշտոցի պող. 15"
    },
    {
        firstname: "Մարիամ",
        lastname: "Պետրոսյան",
        age: 30,
        phone: "+374 93 765432",
        address: "Երևան, Աբովյան 12"
    },
    {
        firstname: "Դավիթ",
        lastname: "Նիկողոսյան",
        age: 40,
        phone: "+374 77 234567",
        address: "Երևան, Կոմիտաս 33"
    }
];

function a() {
    var box = document.getElementById("box");
    mardik.forEach(mard => {
        var div = document.createElement("div");
        div.innerHTML = `
            <h3>Անուն: ${mard.firstname} ${mard.lastname}</h3>
            <p>Տարիք: ${mard.age}</p>
            <p>Հեռախոսահամար: ${mard.phone}</p>
            <p>Հասցե: ${mard.address}</p>
            <hr>
            `
            ;
        box.appendChild(div);
    });
}

a();