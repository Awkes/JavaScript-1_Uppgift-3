/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 2
   Ett script som räknar ut hypotenusans längd i en rätvinklig triangel med hjälp av Pythagoras sats
   Andreas Åkerlöf, 2018-10-18
*/

// Funktion som räknar ut en triangels hypotenusa [ Formel: √(a² + b²) = c ], arundas till två decimaler.
function hypotenusa(a,b) {
    return (Math.sqrt(Math.pow(a,2) + Math.pow(b,2)).toFixed(2));
}

// Exempel på uträkning av hyptoenusan på en rätvinklig triangel som har kateterna 7 och 3.
console.log('Triangelns hypotenusa är: ' + hypotenusa(7,3));