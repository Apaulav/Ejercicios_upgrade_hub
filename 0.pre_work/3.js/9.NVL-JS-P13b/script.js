function frase(a) {

    var frase = a;
    var fraseIntroducida = frase.split("");
	console.log(fraseIntroducida);
    var fraseAlReves = frase.split("").reverse("");
	console.log(fraseAlReves);
    var fraseIntroducida =fraseIntroducida.join("");
	console.log(fraseIntroducida);
    var fraseAlReves =fraseAlReves.join("");
	console.log(fraseAlReves);
    
    if (fraseIntroducida == fraseAlReves) {
        
        console.log("Es un palindromo");
    }
    else {
        console.log("No es un palindromo");
    }
}

frase("lapiz");
frase("oso");

He hecho una funcion llamada frase que le entra una frase por el parametro a. En la variable frase introducida y frase al reves, dividimos la frase y la metemos en un array, para ello usamos split y dividimos cada letra. Ahora guardamos el resultado en las mismas variable y con el comando join juntamos todas las letras. Comparamos con un if si la frase introducida y la frase al reves son iguales en el caso que lo sean indicará por consola que si lo es, en el caso que no, entonces que no lo es. LLamamos a la función y le pasamos los parametros lapiz y oso.