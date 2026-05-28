function heitäNoppa() {

    let luku = Math.floor(Math.random() * 6) + 1;

    document.getElementById("noppa").innerHTML =
        "Nopan tulos: " + luku;
}

function arvoLotto() {

    let numerot = [];

    while (numerot.length < 7) {

        let numero = Math.floor(Math.random() * 40) + 1;

        if (!numerot.includes(numero)) {
            numerot.push(numero);
        }
    }

    numerot.sort((a, b) => a - b);

    document.getElementById("lotto").innerHTML =
        "Lotonumerot: " + numerot.join(", ");

    let omat = [
        Number(document.getElementById("num1").value),
        Number(document.getElementById("num2").value),
        Number(document.getElementById("num3").value),
        Number(document.getElementById("num4").value),
        Number(document.getElementById("num5").value),
        Number(document.getElementById("num6").value),
        Number(document.getElementById("num7").value)
    ];

    let oikein = 0;

    for (let numero of omat) {
        if (numerot.includes(numero)) {
            oikein++;
        }
    }

    document.getElementById("oikein").innerHTML =
        "Sait oikein " + oikein + " numeroa!";
}