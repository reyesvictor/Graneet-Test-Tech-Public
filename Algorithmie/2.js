// Instructions
// Pour lancer le code faire 
// node ./2.js

// Définir les variables
const m = Math.floor((Math.random() * Math.pow(2, 32))) // Générer un chiffre
const mbinary = m.toString(2)
let j = 0;
let l = 0;
let pos = 0;

// Boucler sur le chiffre en binaire
for (let i = 0; i < mbinary.length; i++) {
  if (parseInt(mbinary[i]) === 0) { // On compte le nombre de zéros
    j++;
  } else {
    if (j > l) {
      pos = i;
      l = j;
    }
    j = 0;
  }
}

// Afficher le résultat
console.log(`M = ${m}`);
const res = `${mbinary.substr(0, pos - l)}\x1b[36m${mbinary.substr(pos - l, l)}\x1b[0m${mbinary.substr(pos)}`;
console.log(`L = ${l} (car ${res} en binaire)`);