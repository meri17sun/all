
var mardik = [
    { firstName: "Անի", lastName: "Հովհաննիսյան", phone: "+37491234567", email: "ani@mail.com", age: 17, country: "Հայաստան", postalCode: "0010" },
    { firstName: "Գևորգ", lastName: "Սարգսյան", phone: "+37493456789", email: "gevorg@mail.com", age: 25, country: "Հայաստան", postalCode: "0025" },
    { firstName: "Մարիա", lastName: "Պետրոսյան", phone: "+37494567890", email: "maria@mail.com", age: 16, country: "Հայաստան", postalCode: "0030" },
    { firstName: "Դավիթ", lastName: "Հակոբյան", phone: "+33143122222", email: "davit@mail.com", age: 30, country: "Ֆրանսիա", postalCode: "75001" },
    { firstName: "Նարե", lastName: "Մարտիրոսյան", phone: "044789012", email: "nare@mail.com", age: 14, country: "Հայաստան", postalCode: "0045" },
    { firstName: "Արման", lastName: "Աբրահամյան", phone: "+79122636640", email: "arman@mail.com", age: 19, country: "Ռուսաստան", postalCode: "101000" },
    { firstName: "Սոնա", lastName: "Քոչարյան", phone: "098901234", email: "sona@mail.com", age: 22, country: "Հայաստան", postalCode: "0055" },
    { firstName: "Արթուր", lastName: "Պողոսյան", phone: "099012345", email: "arthur@mail.com", age: 15, country: "Հայաստան", postalCode: "0060" },
    { firstName: "Լուսինե", lastName: "Ավետիսյան", phone: "+14161234567", email: "lusine@mail.com", age: 18, country: "Կանադա", postalCode: "M5H" },
    { firstName: "Հովհաննես", lastName: "Մկրտչյան", phone: "077223344", email: "hovhannes@mail.com", age: 20, country: "Հայաստան", postalCode: "0070" },
    { firstName: "Անահիտ", lastName: "Գրիգորյան", phone: "093334455", email: "anahit@mail.com", age: 12, country: "Հայաստան", postalCode: "0080" },
    { firstName: "Կարեն", lastName: "Սահակյան", phone: "+1917444883", email: "karen@mail.com", age: 28, country: "ԱՄՆ", postalCode: "10001" },
    { firstName: "Նունե", lastName: "Վարդանյան", phone: "095556677", email: "nune@mail.com", age: 17, country: "Հայաստան", postalCode: "0090" },
    { firstName: "Տիգրան", lastName: "Գևորգյան", phone: "093667788", email: "tigran@mail.com", age: 23, country: "Հայաստան", postalCode: "0100" },
    { firstName: "Լևոն", lastName: "Հարությունյան", phone: "+3228114000", email: "levon@mail.com", age: 16, country: "Բելգիա", postalCode: "1000" }
];

document.write("<ul>");

mardik.forEach(person => {
    let color;

    if (person.country === "Հայաստան") {
        color = person.age < 18 ? "red" : "green";
    } else {
        color = "blue";
    }

    document.write(`<li style="color: ${color}">${person.firstName} ${person.lastName}, ${person.age},  ${person.phone}, ${person.email}, ${person.country}, ${person.postalCode}</li>`);
});

document.write("</ul");
