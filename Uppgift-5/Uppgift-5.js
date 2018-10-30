/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 5
   Frekvenstabell över tärningskast - Scriptet genererar 1000 tärningskast
   och räknar ut hur många gånger varje siffra rullats.
   Andreas Åkerlöf, 2018-10-30
*/

// Funktionen randomDice rullar det antal tärningar som anges i rolls och returnerar resultaten i en array.

function randomDice(rolls) {
    let diceRolls = [];
    for (let i = 0; i < rolls; i++) {
        diceRolls.push(Math.ceil(Math.random() * 6));
    }
    return diceRolls;
}

/* Funktionen anropar randomDice för att hämta 1000 slumpmässiga tärningskast,
   sedan loopar den igenom arrayen och räknar hur många ettor, tvåor, treor, fyror, femmor och sexor,
   som har rullats. Resultatet skrivs ut i console. */

function print() {
    let diceRolls = randomDice(1000);
    let count = [0, 0, 0, 0, 0, 0]; // Array för att räkna antal. [1:or, 2:or, 3:or, 4:or, 5:or, 6:or]
    for (let value in diceRolls) {
        count[diceRolls[value]-1]++; // Om det är 1:or ökar värdet med 1 i count[0], 2or i count[1] osv
    }
    console.log(`
        Frekvenstabell över tärningskast.
        Ettor\tTvåor\tTreor\tFyror\tFemmor\tSexor
        ${count[0]}\t${count[1]}\t${count[2]}\t${count[3]}\t${count[4]}\t${count[5]}
    `);
}

print();