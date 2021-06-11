function ajaxReturn(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url,false);
    req.send(null);

    if (req.status === 200) {
      return req.responseText;
    }
}

//Récupérer le nom que l'utilisateur a rentré
function entréeutilisateur(search){

  var nom = document.getElementById("search").value; 
  return nom
}

//Fonction permettant de faire la recherche sur l'API en fonction du nom rentré par l'utilisateur et intégré à une boucle for afin de créer des paragraphes par publication.
function ab(search){
   var elt = document.getElementById("test");
   elt.innerHTML = "";
    nbJ = ajaxReturn('https://api.archives-ouvertes.fr/search/?q=authFullName_t:' + entréeutilisateur(search) + '&wt=json&rows=0');
        nbJSON = JSON.parse(nbJ);
        var resultnb = nbJSON["response"];
        var nb = resultnb["numFound"];
        //if nb > 0 {
            elt.innerHTML = elt.innerHTML+"Le nombre de publication de "+"<em>"+entréeutilisateur(search)+"</em>"+" est de  "+nb+"."+"<hr>";
            //}else {
            //elt.innerHTML = elt.innerHTML + "Il n'existe aucune publication pour la recherche "+"<em>"+entréeutilisateur(search)+"</em>"+".";
        //}       

          for (var i=0; i<nb; i++) {
            docidJ = ajaxReturn('https://api.archives-ouvertes.fr/search/?q=authFullName_t:' + entréeutilisateur(search) + '&wt=json&fl=docid&start=' + i + '&rows=1&sort=submittedDate_tdate desc');
          docidJSON = JSON.parse(docidJ);
          var resultdocid = docidJSON.response;
          var retdoc = JSON.stringify(resultdocid.docs);
          var correcd = retdoc.replace('[', '');
          var correcd2 = correcd.replace(']', '');
          var correcd3 = correcd2.replace('{', '');
          var correcd4 = correcd3.replace('}', '');
          var correcd5 = correcd4.replace('d', '');
          var correcd6 = correcd5.replace('o', '');
          var correcd7 = correcd6.replace('c', '');
          var correcd8 = correcd7.replace('i', '');
          var correcd9 = correcd8.replace('d', '');
          var correcd10 = correcd9.replace(':', '');
          var docid = correcd10.replace(/"/g, '');

          lienJ = ajaxReturn('https://api.archives-ouvertes.fr/search/?q=authFullName_t:' + entréeutilisateur(search) + '&wt=json&fl=uri_s&start=' + i + '&rows=1&sort=submittedDate_tdate desc');
          lienJSON = JSON.parse(lienJ);
          var resultlien = lienJSON.response;
          var retlien = JSON.stringify(resultlien.docs);
          var correcl1 = retlien.replace('[', '');
          var correcl2 = correcl1.replace(']', '');
          var correcl3 = correcl2.replace('{', '');
          var correcl4 = correcl3.replace('}', '');
          var correcl5 = correcl4.replace('u', '');
          var correcl6 = correcl5.replace('r', '');
          var correcl7 = correcl6.replace('i', '');
          var correcl8 = correcl7.replace('_', '');
          var correcl9 = correcl8.replace('s', '');
          var correcl10 = correcl9.replace(':', '');
          var lien = correcl10.replace(/"/g, '');

          détailJ = ajaxReturn('https://api.archives-ouvertes.fr/search/?q=authFullName_t:' + entréeutilisateur(search) + '&wt=json&fl=label_s&start=' + i + '&rows=1&sort=submittedDate_tdate desc');
          détailJSON = JSON.parse(détailJ);
          var resultdétail = détailJSON.response;
          var retdétail = JSON.stringify(resultdétail.docs);
          var correcd1 = retdétail.replace('[', '');
          var correcd2 = correcd1.replace(']', '');
          var correcd3 = correcd2.replace('{', '');
          var correcd4 = correcd3.replace('}', '');
          var correcd5 = correcd4.replace('l', '');
          var correcd6 = correcd5.replace('a', '');
          var correcd7 = correcd6.replace('b', '');
          var correcd8 = correcd7.replace('e', '');
          var correcd9 = correcd8.replace('l', '');
          var correcd10 = correcd9.replace('_', '');
          var correcd11 = correcd10.replace('s', '');
          var correcd12 = correcd11.replace(':', '');
          var détail = correcd12.replace(/"/g, '');
          
          elt.innerHTML = elt.innerHTML + "<p>"+(i+1)+ " : "+"<b>"+"Doc ID : "+"</b>"+docid+"<br>"+"<b>"+"Détails : "+"</b>"+détail+"<br>"+"<b>"+"Plus d'information sur ce lien : "+"</b>"+lien.link(lien)+"</p>"+"<hr>";
          }}



nbJ = ajaxReturn('https://api.archives-ouvertes.fr/search/?q=authFullName_t:Benoit Gaudou&wt=json&rows=0');