/* 
Asumiendo que Math.floor((Math.random() * 100) + 1); saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:

    Saca 50 números al azar entre 1 y 100
    Almacena los números que salgan impares en un array impares
	Almacena los números que salgan pares en un array pares 
*/
var par = [];
var impar = [];
// Saca 50 números al azar entre 1 y 100
for(var i=0; i<50; i++){
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