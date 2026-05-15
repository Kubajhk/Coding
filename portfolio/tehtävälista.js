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
    let maaraInput = document.getElementById("maara");

    let arvo = input.value;
    let maara = Number(maaraInput.value);

    for (let i = 0; i < maara; i++) {
        lista.push(arvo);
    }

    paivitaLista();

    input.value = "";
    maaraInput.value = 1;
}

paivitaLista();