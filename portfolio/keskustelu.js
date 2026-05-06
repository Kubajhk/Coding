console.log("Keskustelun sivu avattu");

function send(event) {
    event.preventDefault();

    let birthdayField = document.getElementById("pvm");
    let emailField = document.getElementById("email");
    let typeField = document.getElementById("tyyppi");
    let usageField = document.getElementById("suostumus");
    let bodyField = document.getElementById("kommentti");

    let birthday = birthdayField.value;
    let email = emailField.value;
    let type = typeField.value;
    let usage = usageField.checked;
    let body = bodyField.value;

    console.log("Syntymäpäivä:", birthday);
    console.log("Sähköposti:", email);
    console.log("Tyyppi:", type);
    console.log("Hyväksytty:", usage);
    console.log("Kommentti:", body);

    let dialog = document.getElementById("dialogi");
    dialog.close();
}