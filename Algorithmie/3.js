// Instructions
// Pour lancer le code faire 
// node ./3.js

//Déclaration des tableaux
const E1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9]
];

const E2 = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
];

// Parcourir le tableau en diagonale à partir de (0,0) et vérifier le parcours qui donne le chiffre le plus élevé
function getBiggestNumberFromParcours(arr = null) {
  if (!arr) return false;
  let M = (arr[0][0]);
  let resultMsg = arr[0][0];
  let y = 0;
  let x = 0;

  for (let i = 0; i < (arr.length - 1); i++) {
    if (M + arr[y][x + 1] > M + arr[y + 1][x] && arr[y][x + 1] !== 0) {
      M += (arr[y][x + 1])
      resultMsg = resultMsg + " -> " + arr[y][x + 1]
    } else if (M + arr[y][x + 1] <= M + arr[y + 1][x] && arr[y + 1][x] !== 0) {
      M += (arr[y + 1][x])
      resultMsg += " -> " + arr[y + 1][x]
    } else {
      resultMsg += " -> " + arr[y + 1][x]
    }

    if ((arr[x + 1][y + 1]) !== 0) {
      resultMsg += " -> " + arr[y + 1][x + 1]
      M += (arr[x + 1][y + 1])
    }

    y++;
    x++;
  }

  console.log(`E = `)
  console.table(arr)
  console.log(`M = ${M} car (${resultMsg})`)
  console.log('')
}

//Lancer les tests
getBiggestNumberFromParcours(E1);
getBiggestNumberFromParcours(E2);