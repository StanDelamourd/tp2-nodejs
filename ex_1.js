function chaine(mot){
  return new Promise((successCallback, failureCallback) => {
    if(mot.length < 20){
      successCallback("true");
    }else{
      failureCallback("Echec");
    }
  })
}
function successCallback(resultat) {
  console.log("true");
}
function failureCallback(erreur){
  console.error("échouer");
}

const promise=chaine('Un mot très loooooooooooooong');
promise.then(successCallback, failureCallback);