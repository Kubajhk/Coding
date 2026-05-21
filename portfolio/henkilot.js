const henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
];

const rivit = document.getElementById("rivit");
const lomake = document.getElementById("lomake");

function luoRivit() {

    rivit.innerHTML = "";

    for (const henkilo of henkilot) {

        const rivi = document.createElement("tr");

        const nimiTd = document.createElement("td");
        nimiTd.textContent = henkilo.name;

        const ikaTd = document.createElement("td");

        if (henkilo.age >= 18) {
            ikaTd.textContent = `${henkilo.age} 🍺`;
        } else {
            ikaTd.textContent = henkilo.age;
        }

        const jobTd = document.createElement("td");

        if (henkilo.job.toLowerCase() === "opiskelija") {
            jobTd.textContent = `${henkilo.job} 🎓`;
        } else {
            jobTd.textContent = henkilo.job;
        }

        const ajokorttiTd = document.createElement("td");
        ajokorttiTd.textContent = henkilo.driversLicense ? "Kyllä" : "Ei";

        rivi.append(nimiTd, ikaTd, jobTd, ajokorttiTd);

        rivit.append(rivi);
    }
}

lomake.addEventListener("submit", function(event) {

    event.preventDefault();

    const nimi = document.getElementById("nimi").value;
    const ika = Number(document.getElementById("ika").value);
    const tyo = document.getElementById("tyo").value;
    const ajokortti = document.getElementById("ajokortti").checked;

    if (ika < 0) {

        alert("Iän pitää olla positiivinen luku");
        return;
    }

    const uusiHenkilo = {
        name: nimi,
        age: ika,
        job: tyo,
        driversLicense: ajokortti
    };

    henkilot.push(uusiHenkilo);

    luoRivit();

    lomake.reset();
});

luoRivit();