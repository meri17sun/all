
var mrger = {
  '001': { name: 'Խնձոր', price: 300 },
  '002': { name: 'Ծիրան', price: 500 },
  '003': { name: 'Դեղձ', price: 600 },
  '004': { name: 'Մանգո', price: 1200 },
  '005': { name: 'Նարինջ', price: 650 },
  '006': { name: 'Արքայախնձոր', price: 2000 },
  '007': { name: 'Նուռ', price: 800 },
  '008': { name: 'Բանան', price: 700 },
  '009': { name: 'Տանձ', price: 750 },
  '010': { name: 'Խաղող', price: 400 }
};


function start() {

  var code = prompt('Ընտրեք խնդրում ենք ապրանքը (001-ից 010):');

  //ստուգում է արդյոք ճիշտ կոդ է մուտքագրվել
  if (mrger[code]) {
    var mirg = mrger[code];

    var qash = prompt(`Քանի կիլոգրամ ${mirg.name} եք ցանկանում գնել?`);
    var kg = parseFloat(qash);

    //ստուգում է, ճիշտ արժեք է մուտքագրվել և դատարկ չէ
    if (!isNaN(kg) && kg > 0) {
      var money = kg * mirg.price;

      //HTML-ում թեգին տալիս ենք id և JS-ում ոգտագործելով innerHTML առանց document.write()-ի արդունքը ցուցադրվում է
      var verjnakan = document.getElementById('patver');
      verjnakan.innerHTML = `
      <div class="box">
        <h3>Պատվերի մանրամասները</h3>
        <p>Ապրանք: ${mirg.name}</p>
        <p>Քաշ: ${kg} կգ</p>
        <p>Գին 1 կգ-ի համար: ${mirg.price} դրամ</p>
        <p><strong>Պետք է վճարեք: ${money} դրամ</strong></p>
        `
        ;
    } else {
      alert('Խնդրում ենք մուտքագրել ճիշտ քանակ:');
    }
  } else {
    alert('Սխալ ապրանքի կոդ:');
  }
}