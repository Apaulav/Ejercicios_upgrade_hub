/* 
Reescribe el ejemplo de los números pares e impares utilizando la función o funciones que estimes oportunas para dejarlo más elegante.
*/

function numerosAzar(a) {
    var par = [];
    var impar = [];
    // Saca 50 números al azar entre 1 y 100
    for(var i=0; i<a; i++){
        var numAzar = Math.floor((Math.random() * 100) + 1);

        // Almacena los números que salgan impares en un array impares
        if (numAzar % 2 == 0) {
            par.push(numAzar);
        }
        else{
            impar.push(numAzar);
        }
    }
        console.log("Estos son lo números pares: " + par);
        console.log("Estos son lo números impares: " + impar);
}