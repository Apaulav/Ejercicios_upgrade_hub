function frase(a) {

    var frase = a;
    var fraseIntroducida = frase.split("");
    var fraseAlReves = frase.split("").reverse("");
    var fraseIntroducida =fraseIntroducida.join("");
    var fraseAlReves =fraseAlReves.join("");
    
    if (fraseIntroducida == fraseAlReves) {
        
        console.log("Es un palindromo");
    }
    else {
        console.log("No es un palindromo");
    }
}

frase("lapiz");
frase("oso");