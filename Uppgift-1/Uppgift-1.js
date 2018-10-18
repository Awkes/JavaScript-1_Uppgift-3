/*
   JavaScript 1 - Inlämingsuppgift 3 - Uppgift 1
   Ett script som skapar personer, med adresser och sedan presenterar dem.
   Andreas Åkerlöf, 2018-10-17
*/

// En objektkonstruktor för att skapa personer, med egenskaperna namn, epost, mobil, adress och en metod som skriver ut namn och adress.
function Person(namn, epost, mobil, adress) {
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = adress;
    this.print = function () {
        console.log(`
            ${this.namn}
 
            ${this.adress.gata}
            ${this.adress.postnr} ${this.adress.ort}
        `);
    }
}

// En objektkonstruktor för att skapa adresser med egenskaperna gata, postnr och ort.
function Adress(gata, postnr, ort) {
    this.gata = gata;
    this.postnr = postnr;
    this.ort = ort;
}

// Skapar två objekt av typen Person, samt två underobjekt av typen Adress.
let andreas = new Person("Andreas Åkerlöf", "andreas@epost.se", "070-1234567", new Adress("Andreasgatan 13", 12345, "Stockholm"));
let erika = new Person("Erika Åkerlöf", "erika@epost.se", "070-1234567", new Adress("Erikagatan 13", 12345, "Stockholm"));

// Skriver ut Andreas och Erikas namn och adress.
andreas.print();
erika.print();