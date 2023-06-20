const readlineSync = require ("readline-sync")
const { generarNumeroAleatorio, verificarAdivinanza} = require ("./adivinanza")


function obtenerNumeroUsuario () {
    return readlineSync.question ("Ingresa tu numero:  ")
};

function juegoAdivinanza () {
    const numeroSecreto = generarNumeroAleatorio ();
    let numeroAdivinado = 0;

    console.log ("Bienvenido a Adivinar el numero")
    console.log ("Intenta adivinar un numero del 1 al 100")

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario () 
        verificarAdivinanza (numeroSecreto, numeroAdivinado)
    }
}
juegoAdivinanza ();
;