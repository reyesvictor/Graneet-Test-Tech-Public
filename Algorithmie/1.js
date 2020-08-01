// Instructions
// Pour lancer le code faire 
// node ./1.js

// Déclarer les variables
const base = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const t = base.slice(0, Math.floor((Math.random() * base.length) + 1)) // Slice l'array des billets/monnaies pour changer les tests
const m = 626.5;
let pArr = [];
let p = 0;
let resultMsg = '';

// Fonction qui calcule le nombre de billets et pièces que vaut la somme m
function getResult(t, m) {
  resultMsg = '';
  pArr = [];
  i = 0;

  // Tant qu'il reste un montant m
  while (m !== 0) {
    let elem = t[i];
    if (m - elem >= 0) {
      pArr.push(elem);
      m = m - elem;
    } else if (i === t.length - 1 && m - t[i] < 0) { // Si on se trouve au dernier élément de t et que la soustraction de cet élement donne un chiffre négatif il n'y pas de solution
      for (let i = 0; i < pArr.length; i++) {
        if (i === 0 && i === pArr.length - 1) resultMsg = pArr[i] + ", mais impossible de faire le reste";
        else if (i === 0) resultMsg = pArr[i];
        else if (i === pArr.length - 1) resultMsg += " + " + pArr[i] + ", mais impossible de faire le reste"
        else resultMsg += ' + ' + pArr[i];
      }
      return -1;
    }
    else {
      i++;
    }
  }
  for (let i = 0; i < pArr.length; i++) {
    if (i === 0) resultMsg = pArr[i];
    else resultMsg += ' + ' + pArr[i];
  }
  return pArr.length;
}

// Appel de la fonctions et tests
console.log(`T = [${t}]`);
console.log(`M = ${m}`);
p = getResult(t, m); // Lancer la fonction
console.log(`P = ${p}      (${resultMsg})`);