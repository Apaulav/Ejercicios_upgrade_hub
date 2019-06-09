/* 
Realiza una función, que será invocada desde el ámbito global, para calcular los n primeros números primos. Recordamos que un número primo, únicamente es divisible por sí mismo y por la unidad.

Esa “n” que indica la cantidad de números a calcular es el parámetro de la función.  
*/

//a es el número del que queremos calcular los números primos que se define cuando llamas a la función
function numerosPrimos(a) {
    //Para calcular un número primo hay que dividir entre 2, 3, 5, 7, 11,13 y 17 si el resto de la división da 0 no es primo.
   //Creo un array para ir recorriendo los números primos con un for.
    var n = [2,3,5,7,11,13,17];
   //La variable b solo va a contener true o false, lo explico más abajo
    var b = "";
    //Creo un for para recorrer el array e ir comprobando cada uno de los números primos.
     for (var i=0; i<n.length; i++){
        //Compruebo si el numero a calcular es diferente a un número primo, ya que n[i] corresponde a cada elemento del array y con el for los recorro todos.
        if (a != n[i]) {
           //Si no es igual al número primo entonces comprueba si ese número se puede dividir por todos los números primos, si en algún caso el resto da 0 b se pone en true, muestra por consola que no es un número primo y se sale del for con el break, sino continua hasta el final y b será igual a false.
            if (a % n[i] == 0){
                b = true;
                console.log("No es primo");
                break;
            }
            else {
                b = false;
            }
        }
       //Si en el primer if comprueba que es igual a alguno de los primos entra este else cambia b por el valor true, muestra en consola que es primo y se sale del for.
        else {
            b = true;
            console.log("Es primo");
            break;
        }
    }
    //Este if comprueba si b es false, es decir ha continuado con el for hasta el final y en ningún caso el resto da 0 al dividir por los números primos indicados en el array. En ese caso mostrará por consola que es un número primo.
    if (b == false) {
        console.log("Es primo");
    }
}
//Función invocada desde el ámbito global, lo que está entre parentesis, donde indicamos el número que queremos comprobar si es primo o no.
numerosPrimos(20);