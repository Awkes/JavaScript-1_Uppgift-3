/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 4
   Scriptet beräknar volym och area av en sfär.
   Formler: Volym = 4πr³ / 3, Area = 4πr²
   Andreas Åkerlöf, 2018-10-18
*/

let radie = 5;
console.log("Sfärens volym är: " + ((4*Math.PI*Math.pow(radie,3)) / 3).toFixed(2));
console.log("Sfärens area är: " + (4*Math.PI*Math.pow(radie,2)).toFixed(2));