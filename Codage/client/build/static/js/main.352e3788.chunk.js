(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){e.exports=a(39)},19:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(12),s=a.n(c),r=(a(19),a(2)),o=(a(20),a(13)),i=a.n(o);a(38);var m=function(){var e=Object(l.useState)("<div class='bloc msg msg-info'>Effectuez une recherche</div>"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(l.useState)("<div class='bloc msg msg-info'>Effectuez une recherche</div>"),o=Object(r.a)(s,2),m=o[0],d=o[1],u=Object(l.useState)(""),v=Object(r.a)(u,2),h=v[0],p=v[1],g=Object(l.useState)(""),E=Object(r.a)(g,2),f=E[0],b=E[1];return n.a.createElement("div",{className:"App container-fluid p-4"},n.a.createElement("div",{className:"d-flex",id:"searchbar"},n.a.createElement("h1",null,"Je recherche..."),n.a.createElement("input",{className:"form-control",type:"search",name:"ville",placeholder:"...une ville, un code postal",onKeyPress:function(e){return"Enter"===e.key&&""!==e.target.value?(t=e.target.value,void i.a.post("http://localhost:4141/",{ville:t},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),p(e.data[0]);var t=e.data[0].length;c(0===t?"<div class='bloc msg msg-danger'>Aucune ville correspondant au texte saisi</div>":"<div class='bloc msg msg-success'>".concat(t," ").concat(1===t?"ville":"villes"," correspondant au texte saisi</div>")),b(e.data[1]);var a=e.data[1].length;d(0===a?"<div class='bloc msg msg-danger'>Aucune ville correspondant au texte saisi</div>":"<div class='bloc msg msg-success'>".concat(a," ").concat(1===a?"ville":"villes"," correspondant au texte saisi</div>"))})).catch((function(e){return console.error(e)}))):null;var t}})),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"col-6 pl-0"},n.a.createElement("div",{id:"metropole-villes-container"},n.a.createElement("h2",{className:"titre"},"Villes de m\xe9tropole"),a?n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):null,n.a.createElement("br",null),n.a.createElement("div",{className:"results"},h&&h.length>0?h.map((function(e,t){return n.a.createElement(l.Fragment,{key:"metropole-"+t},n.a.createElement("div",{className:"col-6 bloc ville d-flex"},n.a.createElement("div",{className:"nom"},e.nomCommune),n.a.createElement("div",{className:"code-postal"},e.codePostal)))})):null))),n.a.createElement("div",{className:"col-6 pr-0"},n.a.createElement("div",{id:"exterieur-villes-container"},n.a.createElement("h2",{className:"titre"},"Villes d'outre-mer"),m?n.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}):null,n.a.createElement("br",null),n.a.createElement("div",{className:"results"},f&&f.length>0?f.map((function(e,t){return n.a.createElement(l.Fragment,{key:"exterieur-"+t},n.a.createElement("div",{className:"col-6 bloc ville d-flex"},n.a.createElement("div",{className:"nom"},e.nomCommune),n.a.createElement("div",{className:"code-postal"},e.codePostal)))})):null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.352e3788.chunk.js.map