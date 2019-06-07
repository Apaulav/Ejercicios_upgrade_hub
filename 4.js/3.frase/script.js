var frases = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];
var resultado = {
    longitud: 0,
    masLarga: ""
}

for ( var i = 0; i < frases.length; i++ ) {
    if (frases[i].length > resultado.longitud) {
        resultado.longitud = frases[i].length;
        resultado.masLarga = frases[i];
    }
}
console.log("La longitud es " + resultado.longitud);
console.log("La frase mas larga es " + resultado.masLarga);
