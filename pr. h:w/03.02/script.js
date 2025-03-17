
var mardik = [
    { name: 'Արամ', country: 'Հայաստան' },
    { name: 'Անահիտ', country: 'Հայաստան' },
    { name: 'Սուրեն', country: 'Ռուսաստան' },
    { name: 'Մարիամ', country: 'Հայաստան' },
    { name: 'Դավիթ', country: 'ԱՄՆ' }
];

function armenian(hay) {
    return hay.filter(mard => mard.country === 'Հայաստան');
}

const hayer = armenian(mardik);
console.log(hayer);