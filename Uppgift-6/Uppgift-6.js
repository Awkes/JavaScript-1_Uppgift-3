/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 6
   Scriptet beräknar fakultet av ett inmatat tal mellan 1-1000
   Andreas Åkerlöf, 2018-10-30
*/

let tal;
// Fortsätter fråga efter ett tal tills kravet att talet är mellan 1 och 1000 uppfylls.
while (true) {
    tal = prompt("Mata in ett tal mellan 1 och 1000, för att beräkna fakulteten.");
    if (tal === null) {                                                                // Trycker man avbryt, skrivs meddelande ut 
        document.getElementById('fakultet').innerText = 'Program avbrutet';            // och programmet avbryts.
        break;      
    }
    else if (Number(tal) >= 1 && Number(tal) <= 1000) {                                // Om tal är mellan 1-1000 skrivs resultatet 
        document.getElementById('fakultet').innerText = tal + '! = ' + fakultet(tal);  // ut med hjälp av funktionen fakultet().
        break;
    }
}

// Funktion som räknar ut fakulteten av inmatat tal
function fakultet(tal) {
    let f = 1;
    for (let i = 1; i <= tal; i++) {
        f *= i;    // Varv 1: 1*1=1, Varv 2: 1*2 = 2, Varv 3: 2*3 = 6... osv. (dvs 1*2*3)
    }
    return f;
}