/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 3
   Scriptet läser in en cirkels radie och beräknar dess omkrets och area.
   Formler: Omkrets = 2 x π x r, Area = π x r²
   Andreas Åkerlöf, 2018-10-18
*/

let radie = prompt('Skriv in cirkelns radie:');
alert('Cirkelns omkrets är: ' + (2*Math.PI*radie).toFixed(2) + '.\nCirkelns area är: ' + (Math.PI*Math.pow(radie,2)).toFixed(2));