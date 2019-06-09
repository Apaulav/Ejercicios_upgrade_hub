/* 
Realiza una función, que será invocada desde el ámbito global, para calcular los n primeros números primos. Recordamos que un número primo, únicamente es divisible por sí mismo y por la unidad.

Esa “n” que indica la cantidad de números a calcular es el parámetro de la función.  
*/

//a es el número del que queremos calcular los números primos
function numerosPrimos(a) {
    //Para calcular un número primo hay que dividir entre 2, 3, 5, 7, 11, si el resto da 0 en algún caso no es primo.
    var n = [2,3,5,7,11,13,17];
    var b = "";
    for (var i=0; i<n.length; i++){
        //Compruebo si el numero a calcular es igual a un número primo
        if (a != n[i]) {
            if (a % n[i] == 0){
                b = true;
                console.log("No es primo");
                break;
            }
            else {
                b = false;
            }
        }
        else {
            b = true;
            console.log("Es primo");
            break;
        }
    }
    if (b == false) {
        console.log("Es primo");
    }
}
//Función invocada desde el ámbito global
numerosPrimos(20);