const express = require("express");
const app = express();
const cors = require('cors')
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, './.env') })

// Résouds les problèmes de connexion client - server
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Setup Connexion à la BDD
var MongoClient = require("mongodb").MongoClient;
let villesSchema = mongoose.Schema({
  codePostal: String,
  codeCommune: String,
  nomCommune: String,
  libelleAcheminement: String
}, {
  collection: 'codes-postaux'
});
let Villes = mongoose.model('Villes', villesSchema);
let uri = process.env.MONGODB_URI

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB CONNECTION FAIL :", err));

//Afficher le client quand je build et host sur heroku
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//Route qui récupère les villes en fonction de la recherche client (string ou number)
app.post("/", (request, res) => {
  let resMetropole = []
  let resExterieur = []
  let recherche = request.body.ville;

  let obj = {};
  if (isNaN(parseInt(recherche))) {
    obj = { "nomCommune": new RegExp(recherche, 'gi') }
  } else {
    obj = { "codePostal": new RegExp('^' + recherche) };
  }

  //Requête vers la base de donnée
  Villes.find(obj, function (err, data) {
    if (err) return console.log(err);
    if (data.length === 0) {
      res.send([[], []]);
      return false;
    };

    for (let i = 0; i < data.length; i++) {
      let cpostal = parseInt(data[i]["codePostal"].substr(0, 2))
      // La recherche est un nom de ville
      if (obj.nomCommune) {
        if (cpostal <= 95 && resMetropole.length < 100) resMetropole.push(data[i])
        if (cpostal > 95 && resExterieur.length < 100) resExterieur.push(data[i])
      }
      // La recherche est un code postal
      else if (parseInt(data[i]["codePostal"].substr(0, recherche.length)) === parseInt(request.body.ville)) {
        if (cpostal <= 95 && resMetropole.length < 100) resMetropole.push(data[i])
        if (cpostal > 95 && resExterieur.length < 100) resExterieur.push(data[i])
      }
    }

    if (resMetropole.length > 1) resMetropole = resMetropole.sort(sortArr)
    if (resExterieur.length > 1) resExterieur = resExterieur.sort(sortArr)

    let villes = [resMetropole, resExterieur];
    console.log(villes)
    res.send(villes);
  });
});

//Ordonner les arrays par nom de ville
const sortArr = (a, b) => {
  if (a.nomCommune < b.nomCommune) {
    return -1;
  }
  if (a.nomCommune > b.nomCommune) {
    return 1;
  }
  return 0;
}


app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(`Running on port ${process.env.PORT} - ${process.env.NODE_ENV}`);
});
