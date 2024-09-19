// fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
//     .then((res) => res.json())
//     .then((data) => {
//             crearCard(data.results);
//     });

const container = document.getElementById("container")
let botton = document.getElementById("evento")

evento.onclick = function(){
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then((res) => res.json())
    .then((data) => {
            crearCard(data.results);
    });
}

function crearCard(data) {
    let cards = ""

    for (let i = 0; i < 20; i++) {
        let user = data[i]
        cards += `
    <div class="card">
      <p>Nombre: ${user.name}</p>
      <p>Url: ${user.url}</p>
    </div>
    `
    }

    container.innerHTML = cards
}