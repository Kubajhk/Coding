
class Person {

  constructor(name, age, job, driversLicense) {

    this.name = name;
    this.age = age;
    this.job = job;
    this.driversLicense = driversLicense;
  }


  isUnderage() {

    return this.age < 18;
  }


  isStudent() {

    return (
      this.job.toLowerCase() === "opiskelija" ||
      this.job.toLowerCase() === "student"
    );
  }
}



const persons = [

  new Person("Matti Meikäläinen", 25, "Ohjelmoija", true),

  new Person("Liisa Lahtinen", 17, "Opiskelija", false),

  new Person("Pekka Virtanen", 34, "Rakennusmies", true),

  new Person("Sara Niemi", 22, "Student", true),

  new Person("Emma Korhonen", 15, "Koululainen", false)
];



const tableBody = document.getElementById("tableBody");



persons.forEach(function(person) {


  const tr = document.createElement("tr");


  const nameTd = document.createElement("td");

  nameTd.textContent = person.name;

  tr.appendChild(nameTd);



  const ageTd = document.createElement("td");

  if (person.isUnderage()) {

    ageTd.textContent = person.age;

  } else {

    ageTd.textContent = person.age + " 🍺";
  }

  tr.appendChild(ageTd);



  const jobTd = document.createElement("td");

  if (person.isStudent()) {

    jobTd.textContent = person.job + " 🎓";

  } else {

    jobTd.textContent = person.job;
  }

  tr.appendChild(jobTd);


  const licenseTd = document.createElement("td");

  if (person.driversLicense) {

    licenseTd.textContent = "Kyllä";

  } else {

    licenseTd.textContent = "Ei";
  }

  tr.appendChild(licenseTd);



  tableBody.appendChild(tr);
});