var person = {};

function a() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    person = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        age: age
    };

    template();
}

function template() {
    var template = document.getElementById('template');
    template.innerHTML = `
        <p>Անուն: ${person.firstname}</p>
        <p>Ազգանուն: ${person.lastname}</p>
        <p>Էլ. փոստ: ${person.email}</p>
        <p>Տարիք: ${person.age}</p>
        `
        ;
}