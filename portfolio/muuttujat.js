console.log("Muuttujia ja tietotyyppejä -sivu avattu");

let a = 3;
let b = 5;
let c = 7;
let d = 15;

function summa(x, y) {
    alert(x + y);
}

function vahennys(x, y) {
    alert(x - y);
}

function kerto(x, y) {
    alert(x * y);
}

function jako(x, y) {
    alert(x / y);
}

function laskin_summa() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    summa(eka, toka);
}

function laskin_vahennys() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    vahennys(eka, toka);
}

function laskin_kerto() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    kerto(eka, toka);
}

function laskin_jako() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    jako(eka, toka);
}

function naytaPaivamaaraJaAika() {

    let nyt = new Date();

    let paiva = nyt.getDate();
    let kuukausiNumero = nyt.getMonth() + 1;
    let vuosi = nyt.getFullYear();

    let tunnit = String(nyt.getHours()).padStart(2, "0");
    let minuutit = String(nyt.getMinutes()).padStart(2, "0");
    let sekunnit = String(nyt.getSeconds()).padStart(2, "0");

    let viikonpaivat = [
        "sunnuntai",
        "maanantai",
        "tiistai",
        "keskiviikko",
        "torstai",
        "perjantai",
        "lauantai"
    ];

    let kuukaudet = [
        "tammikuu",
        "helmikuu",
        "maaliskuu",
        "huhtikuu",
        "toukokuu",
        "kesäkuu",
        "heinäkuu",
        "elokuu",
        "syyskuu",
        "lokakuu",
        "marraskuu",
        "joulukuu"
    ];

    let viikonpaiva = viikonpaivat[nyt.getDay()];
    let kuukausi = kuukaudet[nyt.getMonth()];

    let paivamaaraTeksti = `${paiva}.${kuukausiNumero}.${vuosi}`;
    let aikaTeksti = `${tunnit}.${minuutit}.${sekunnit}`;

    document.getElementById("paivamaara").innerHTML =
        "Päivämäärä: " + paivamaaraTeksti;

    document.getElementById("aika").innerHTML =
        "Aika: " + aikaTeksti;

    document.getElementById("paivaJaAika").innerHTML =
        "Päivämäärä ja aika: " + paivamaaraTeksti + " klo " + aikaTeksti;

    document.getElementById("viikonpaiva").innerHTML =
        "Viikonpäivä: " + viikonpaiva;

    document.getElementById("kuukausi").innerHTML =
        "Kuukausi: " + kuukausi;
}   


let veijo = new Set(["luku", "poisto"]);
let elvira = new Set(["luku", "kirjoitus", "muokkaus"]);
let mehdi = new Set(["luku", "muokkaus", "poisto"]);
let tuuli = new Set(["kirjoitus", "poisto"]);


let kayttajat = {
    Veijo: veijo,
    Elvira: elvira,
    Mehdi: mehdi,
    Tuuli: tuuli
};


for (let nimi in kayttajat) {

    let oikeudet = kayttajat[nimi];

    let ul = document.querySelector(`#${nimi} ul`);

    for (let oikeus of oikeudet) {

        let li = document.createElement("li");

        li.textContent = oikeus;

        ul.appendChild(li);
    }
}


let veijoTuuliYhdistetty = new Set([
    ...veijo,
    ...tuuli
]);

let veijoTuuliLista = document.getElementById("veijotuuli");

for (let oikeus of veijoTuuliYhdistetty) {

    let li = document.createElement("li");

    li.textContent = oikeus;

    veijoTuuliLista.appendChild(li);
}


let mehdiElviraLista = document.getElementById("mehdielvira");

for (let oikeus of mehdi) {

    if (elvira.has(oikeus)) {

        let li = document.createElement("li");

        li.textContent = oikeus;

        mehdiElviraLista.appendChild(li);
    }
}


let elviraTuuliLista = document.getElementById("elviratuuli");

let elviraTuuliErotus = new Set([
    ...[...elvira].filter(oikeus => !tuuli.has(oikeus)),
    ...[...tuuli].filter(oikeus => !elvira.has(oikeus))
]);

for (let oikeus of elviraTuuliErotus) {

    let li = document.createElement("li");

    li.textContent = oikeus;

    elviraTuuliLista.appendChild(li);
}
