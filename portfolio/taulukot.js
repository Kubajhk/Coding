let numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];

let sanat = [
  "skibidi",
  "rizz",
  "gyat",
  "sigma",
  "sus",
  "cap",
  "yeet",
  "lit",
  "simp",
  "cringe"
];



const poimiBtn = document.getElementById("poimiBtn");

poimiBtn.addEventListener("click", function () {

  const numero = Number(document.getElementById("poimiNumero").value);

  document.getElementById("poimiTulos").textContent = sanat[numero];
});



const etsiBtn = document.getElementById("etsiBtn");

etsiBtn.addEventListener("click", function () {

  const sana = document.getElementById("etsiSana").value;

  const indeksi = sanat.indexOf(sana);

  document.getElementById("etsiTulos").textContent = indeksi;
});



const sliceBtn = document.getElementById("sliceBtn");

sliceBtn.addEventListener("click", function () {

  const alku = Number(document.getElementById("sliceAlku").value);

  const loppu = Number(document.getElementById("sliceLoppu").value);

  const tulos = sanat.slice(alku, loppu);

  const lista = document.getElementById("sliceLista");

  lista.innerHTML = "";

  tulos.forEach(function (sana) {

    const li = document.createElement("li");

    li.textContent = sana;

    lista.appendChild(li);
  });
});


const jarjestaLista = document.getElementById("jarjestaLista");

function tulostaLista(listaData) {

  jarjestaLista.innerHTML = "";

  listaData.forEach(function (item) {

    const li = document.createElement("li");

    li.textContent = item;

    jarjestaLista.appendChild(li);
  });
}

document
  .getElementById("tulostaTekstitBtn")
  .addEventListener("click", function () {

    tulostaLista(sanat);
  });



document
  .getElementById("jarjestaTekstitBtn")
  .addEventListener("click", function () {

    sanat.sort();
  });



document
  .getElementById("kaannaTekstitBtn")
  .addEventListener("click", function () {

    sanat.reverse();
  });



document
  .getElementById("tulostaNumerotBtn")
  .addEventListener("click", function () {

    tulostaLista(numerot);
  });



document
  .getElementById("jarjestaNumerotBtn")
  .addEventListener("click", function () {

    numerot.sort(function (a, b) {
      return a - b;
    });
  });



document
  .getElementById("kaannaNumerotBtn")
  .addEventListener("click", function () {

    numerot.reverse();
  });



let suodatetutNumerot = [...numerot];

const suodatusLista = document.getElementById("suodatusLista");

function tulostaSuodatusLista() {

  suodatusLista.innerHTML = "";

  suodatetutNumerot.forEach(function (numero) {

    const li = document.createElement("li");

    li.textContent = numero;

    suodatusLista.appendChild(li);
  });
}



document
  .getElementById("tulostaSuodatusBtn")
  .addEventListener("click", function () {

    tulostaSuodatusLista();
  });



document
  .getElementById("pienemmatBtn")
  .addEventListener("click", function () {

    const raja = Number(document.getElementById("suodatusNumero").value);

    suodatetutNumerot = numerot.filter(function (numero) {

      return numero < raja;
    });
  });



document
  .getElementById("suuremmatBtn")
  .addEventListener("click", function () {

    const raja = Number(document.getElementById("suodatusNumero").value);

    suodatetutNumerot = numerot.filter(function (numero) {

      return numero > raja;
    });
  });