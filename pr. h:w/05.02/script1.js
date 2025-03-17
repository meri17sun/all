
var card = [
    {
        title: "Beautiful Sunrise",
        image: "https://i.pinimg.com/736x/49/cf/fd/49cffdfca01fb6287e1d0f6faee95994.jpg",
        description: "FLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum quos dolorem.",
    },
    {
        title: "Cute Puppy",
        image: "https://i.pinimg.com/736x/88/b4/98/88b498c99714f4365c849bb6389cba6f.jpg",
        description: "FLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum quos dolorem.",
    },
    {
        title: "Wooden Bridge",
        image: "https://i.pinimg.com/736x/71/bc/d6/71bcd6b43169a298584c79677669c16a.jpg",
        description: "FLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum quos dolorem.",
    },
    {
        title: "Puppy & Little Farms",
        image: "https://i.pinimg.com/736x/6b/b6/90/6bb6904f4917ad4b9511270028659100.jpg",
        description: "FLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum quos dolorem.",
    },
    {
        title: "Wave of the Blue Sea",
        image: "https://i.pinimg.com/736x/f0/4e/42/f04e4246653796e767eb4d35a04790ac.jpg",
        description: "FLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum quos dolorem.",
    },
    {
        title: "Foggy Pine Trees",
        image: "https://i.pinimg.com/736x/3c/44/2d/3c442d14248f89ffd285c16a168b0afa.jpg",
        description: "FLorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum quos dolorem.",
    }
];

function gallery(card) {
    var gallery = document.querySelector('.gallery');
    var div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
        <img src="${card.image}">
        <div class="card-content">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `;
    gallery.appendChild(div);
}

card.forEach(card => gallery(card));