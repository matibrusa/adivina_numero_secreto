function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;

};

function verificarAdivinanza (numeroSecreto, numeroAdivinado) {
    if (numeroAdivinado == numeroSecreto) {
        console.log ("Felicitaciones, adivinaste el numero!!"); }
        else if (numeroAdivinado < numeroSecreto){
        console.log ("El numero que pusiste es muy bajo") ;
     }  else if (numeroAdivinado > numeroSecreto){
        console.log ("El numero que pusiste es muy alto") ; 
        }
    }


module.exports= {
    generarNumeroAleatorio,
    verificarAdivinanza
};