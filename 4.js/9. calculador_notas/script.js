function notas() {
    var notasIntroducidas = [];
    while (nota != "FIN") {
        //Mientras el usuario no escriba FIN pedir nota notas
        var nota = prompt ("Introduce una nota");
        nota = nota.toUpperCase();
        if (nota != "FIN"){
            nota = parseFloat(nota,2);
            if (nota <= 10) {
                notasIntroducidas.push(nota);
                console.log(nota);
                console.log(notasIntroducidas);
            }
            else {
                alert("Por favor, introduce un número del 1 al 10")
            }
        }
    }
    //Cuando escriba FIN dejar de pedir notas y calcular la media.
    var media = 0;
    for (var i = 0; i < notasIntroducidas.length ;i++) {
        media = media + notasIntroducidas[i];
        console.log(media);
    }
    media = media/notasIntroducidas.length;
    //Imprimir la media
    alert("La media de tus notas es " + media);
    //Indicar si es suspenso, suficiente, bien, etc
    if (media < 5) {
        alert("Sigue intentando, tu nota es un suspenso");
    } else if (media < 6) {
        alert("Has sacado un Suficiente");
    } else if (media < 7) {
        alert("Has sacado un Bien");
    } else if (media < 9) {
        alert("Has sacado un Notable");
    } else if (media < 10) {
        alert("Has sacado un sobresaliente, ¡Enhorabuena!");
    } else if (media = 10) {
        alert("Has sacado matrícula, ¡Enhorabuena!");
    }
}

notas();