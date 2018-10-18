/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 5
   Frekvenstabell över tärningskast
   Andreas Åkerlöf, 2018-10-18
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
    let count = [0, 0, 0, 0, 0, 0];
    for (let value in diceRolls) {
        if (diceRolls[value] == 1) { count[0]++; }
        else if (diceRolls[value] == 2) { count[1]++; }
        else if (diceRolls[value] == 3) { count[2]++; }
        else if (diceRolls[value] == 4) { count[3]++; }
        else if (diceRolls[value] == 5) { count[4]++; }
        else if (diceRolls[value] == 6) { count[5]++; }
    }
    console.log(`
        Frekvenstabell över tärningskast.
        Ettor\tTvåor\tTreor\tFyror\tFemmor\tSexor
        ${count[0]}\t${count[1]}\t${count[2]}\t${count[3]}\t${count[4]}\t${count[5]}
    `);
}

print();