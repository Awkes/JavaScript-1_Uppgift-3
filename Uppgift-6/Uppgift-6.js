/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 6
   Scriptet beräknar fakultet av ett inmatat tal mellan 1-1000
   Andreas Åkerlöf, 2018-10-24
*/

let tal;
// Fortsätter fråga efter ett tal tills kravet att talet är mellan 1 och 1000 uppfylls.
while (!(tal >= 1 && tal <= 1000) || isNaN(tal)) {
    tal = +prompt("Mata in ett tal mellan 1 och 1000, för att beräkna fakulteten.");
}

// Funktion som räknar ut fakulteten av inmatat tal
function fakultet(tal) {
    let f = 1;
    for (let i = 1; i <= tal; i++) {
        f *= i;    // Varv 1: 1*1=1, Varv 2: 1*2 = 2, Varv 3: 2*3 = 6... osv. (dvs 1*2*3)
    }
    return f;
}

// Anropar funktionen fakultet() och skriver ut resultatet i paragrafen med id 'fakultet'
document.getElementById('fakultet').innerText = tal + '! = ' + fakultet(tal);