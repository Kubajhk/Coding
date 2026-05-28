
const poimiBtn = document.getElementById("poimiBtn");

poimiBtn.addEventListener("click", function () {
  const teksti = document.getElementById("poimiTeksti").value;
  const numero = Number(document.getElementById("poimiNumero").value);

  const kirjain = teksti[numero];

  document.getElementById("poimiTulos").textContent = kirjain;
});



const indeksiBtn = document.getElementById("indeksiBtn");

indeksiBtn.addEventListener("click", function () {
  const teksti = document.getElementById("indeksiTeksti").value;
  const haettava = document.getElementById("haettavaTeksti").value;

  const indeksi = teksti.indexOf(haettava);

  document.getElementById("indeksiTulos").textContent = indeksi;
});



const sliceBtn = document.getElementById("sliceBtn");

sliceBtn.addEventListener("click", function () {
  const teksti = document.getElementById("sliceTeksti").value;
  const alku = Number(document.getElementById("sliceAlku").value);
  const loppu = Number(document.getElementById("sliceLoppu").value);

  const tulos = teksti.slice(alku, loppu);

  document.getElementById("sliceTulos").textContent = tulos;
});



const korvaaBtn = document.getElementById("korvaaBtn");

korvaaBtn.addEventListener("click", function () {
  const teksti = document.getElementById("korvaaTeksti").value;
  const etsittava = document.getElementById("etsiTeksti").value;
  const uusi = document.getElementById("uusiTeksti").value;

  const tulos = teksti.replaceAll(etsittava, uusi);

  document.getElementById("korvaaTulos").textContent = tulos;
});



const splitBtn = document.getElementById("splitBtn");

splitBtn.addEventListener("click", function () {
  const teksti = document.getElementById("splitTeksti").value;
  const jakaja = document.getElementById("jakajaTeksti").value;

  const osat = teksti.split(jakaja);

  const lista = document.getElementById("splitLista");

  lista.innerHTML = "";

  osat.forEach(function (osa) {
    const li = document.createElement("li");

    li.textContent = osa;

    lista.appendChild(li);
  });
});