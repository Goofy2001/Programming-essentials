let school = {
  schoolnaam: "FhB",

  studenten: [
    {
      studentennaam: "Thibo",
      leeftijd: 25,
      vakken: ["Programming", "Data Science"]
    },
    {
      studentennaam: "Sarah",
      leeftijd: 22,
      vakken: ["Web Development", "UX Design"]
    },
    {
      studentennaam: "Jens",
      leeftijd: 27,
      vakken: ["Cybersecurity", "Networks"]
    },
    {
      studentennaam: "Lotte",
      leeftijd: 24,
      vakken: ["AI", "Machine Learning"]
    }
  ],

  cursussen: [
    "Programming Essentials",
    "Data Essentials",
    "Web Development",
    "Cybersecurity Basics",
    "AI Fundamentals"
  ]
}

function inschrijvenStudent(student, vak) {
    let bestaatVak = false
    let bestaatLeerling = false
    let leerlingIndex
    let deelgenomen = false
    for (let i = 0; i < this.cursussen.length; i++) {
        if (this.cursussen[i] == vak) {
            bestaatVak = true
        }
    }
    if (bestaatVak == true) {
        console.log("Het vak bestaat")
        for (let i = 0; i < this.studenten.length; i++) {
            if (this.studenten[i].studentennaam == student) {
                bestaatLeerling = true
                leerlingIndex = i
                console.log(leerlingIndex)
            }
        }
        if (bestaatLeerling == true) {
            console.log("De leerling is ingeschreven")
            for (let i = 0; i < this.studenten[leerlingIndex].vakken.length; i++) {
                
                if (this.studenten[leerlingIndex].vakken[i] == vak) {
                    deelgenomen = true
                }
            }
            if (deelgenomen == false) {
                this.studenten[leerlingIndex].vakken.push(vak)
                console.log(this.studenten[leerlingIndex])
            } else {"De student neemt al deel aan de cursus"}
        }
        else {console.log("De leerling is niet ingeschreven")}
    }
    else {console.log("Het vak bestaat niet")}
    
}


school.inschrijvenStudent = inschrijvenStudent

school.inschrijvenStudent("Thibo", "AI Fundamentals")