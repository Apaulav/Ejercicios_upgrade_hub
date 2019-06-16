function frase(a) {

    var frase = a;
    var fraseIntroducida = frase.split("");
    var fraseAlReves = frase.split("").reverse("");
    var fraseIntroducida =fraseIntroducida.join("");
    var fraseAlReves =fraseAlReves.join("");
    /* for (var i = 0; i > fraseIntroducida.length; i++) {
        var fraseAlReves = fraseIntroducida[i] + fraseAlReves;
        console.log(fraseAlReves);
        //console.log(fraseIntroducida[i]);
    } */ 
    if (fraseIntroducida == fraseAlReves) {
        
        console.log("Es un palindromo");
    }
    else {
        console.log("No es un palindromo");
    }
    /* console.log(fraseIntroducida);
    console.log(fraseAlReves); */
}

frase("lapiz");