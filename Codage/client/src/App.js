import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [messageMetropole, setMessageMetropole] = useState("<div class='bloc msg msg-info'>Effectuez une recherche</div>")
  const [messageExterieur, setMessageExterieur] = useState("<div class='bloc msg msg-info'>Effectuez une recherche</div>")
  const [metropoleListe, setMetropoleListe] = useState("")
  const [exterieurListe, setExterieurListe] = useState("")

  const sendRequest = (ville) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post("http://localhost:4141/", { ville: ville }, config)
      .then(res => {
        console.log(res.data);

        setMetropoleListe(res.data[0])
        let metroLength = res.data[0].length;
        if (metroLength === 0) setMessageMetropole("<div class='bloc msg msg-danger'>Aucune ville correspondant au texte saisi</div>")
        else setMessageMetropole(`<div class='bloc msg msg-success'>${metroLength} ${metroLength === 1 ? "ville" : "villes"} correspondant au texte saisi</div>`)

        setExterieurListe(res.data[1])
        let extLength = res.data[1].length;
        if (extLength === 0) setMessageExterieur("<div class='bloc msg msg-danger'>Aucune ville correspondant au texte saisi</div>")
        else setMessageExterieur(`<div class='bloc msg msg-success'>${extLength} ${extLength === 1 ? "ville" : "villes"} correspondant au texte saisi</div>`)
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="App container-fluid p-4">
      <div className="d-flex" id="searchbar">
        <h1>Je recherche...</h1>
        <input className="form-control" type="search" name="ville" placeholder="...une ville, un code postal" onKeyPress={e => e.key === "Enter" && e.target.value !== "" ? sendRequest(e.target.value) : null} />
      </div>

      <div className="d-flex">

        <div className="col-6 pl-0" >
          <div id="metropole-villes-container">
            <h2 className="titre">Villes de métropole</h2>
            {messageMetropole ? <div dangerouslySetInnerHTML={{ __html: messageMetropole }}></div> : null}<br />
            <div className='results'>

              {metropoleListe && metropoleListe.length > 0 ?
                metropoleListe.map((ville, index) => {
                  return <Fragment key={"metropole-" + index}>
                    <div className="col-6 bloc ville d-flex">
                      <div className="nom">{ville.nomCommune}</div><div className="code-postal">{ville.codePostal}</div>
                    </div>
                  </Fragment>
                })
                :
                null
              }

            </div>
          </div>
        </div>

        <div className="col-6 pr-0" >
          <div id="exterieur-villes-container">
            <h2 className="titre">Villes d'outre-mer</h2>
            {messageExterieur ? <div dangerouslySetInnerHTML={{ __html: messageExterieur }}></div> : null}<br />
            <div className='results'>

              {exterieurListe && exterieurListe.length > 0 ?
                exterieurListe.map((ville, index) => {
                  return <Fragment key={"exterieur-" + index}>
                    <div className="col-6 bloc ville d-flex">
                      <div className="nom">{ville.nomCommune}</div><div className="code-postal">{ville.codePostal}</div>
                    </div>
                  </Fragment>
                })
                :
                null
              }

            </div>
          </div>
        </div>

      </div>

    </div >
  );
}

export default App;
