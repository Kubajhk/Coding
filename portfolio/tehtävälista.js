let lista = [
    "Tehtävä 1",
    "Tehtävä 2"
];

function paivitaLista() {

    let ul = document.getElementById("lista");

    ul.innerHTML = "";

    for (let tehtava of lista) {

        let li = document.createElement("li");

        li.innerHTML = tehtava;

        ul.appendChild(li);
    }
}

function lisaa() {

    let input = document.getElementById("uusiTehtava");

    let arvo = input.value;

    lista.push(arvo);

    paivitaLista();

    input.value = "";
}

paivitaLista();