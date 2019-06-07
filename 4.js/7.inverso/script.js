var frase = "Hola clase!";

function stringInverso(string) { 
    //leer cada letra de la frase
    //pongo la letra de la frase, pero por delante
    var fraseAcaba = false;
    var fraseInversa = "";
    var indice = 0;
    while (!fraseAcaba) {
        console.log("letra");
        var letra = string[indice];
        fraseInversa = letra + fraseInversa;

        indice++;
        if(indice == string.length) {
            fraseAcaba = true;
        }
    }
    console.log(fraseInversa);
}

stringInverso(frase);