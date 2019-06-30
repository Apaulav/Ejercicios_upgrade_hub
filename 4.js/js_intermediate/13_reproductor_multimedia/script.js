//Si hago click en el video o pauso o le doy al play, pantalla completa, cuando acabe el video sacar un botón para volver a reproducir


function reproducir () {
    var video = document.getElementById("video");
    var play = document.getElementById("playButton");
    var pause = document.getElementById("pauseButton");
    var stop = document.getElementById("stopButton");
    var time = document.getElementById("timer");
    var volume = document.getElementById("volumeButton");
    var silent = document.getElementById("noVolumeButton");

    play.addEventListener("click", function() {
        video.play();
        //añade y borra clases
        play.classList.add("hidden");
        stop.classList.remove("hidden");
        pause.classList.remove("hidden");
        time.classList.remove("hidden");
        if (video.muted == false) {
            volume.classList.remove("hidden");
            silent.classList.add("hidden");
        }
        else {
            volume.classList.add("hidden");
            silent.classList.remove("hidden");
        }
        bucle = window.setInterval(barraprogreso, 1000);
        //bucle = setInterval(barraprogreso,1000);
        //time.html(toHMS(video.currentTime));
        //time.value +=5;
        //La línea se rellenará con el porcentaje de tiempo transcurrido
        //updateCanvas(parseInt(video.currentTime * 100 / video.duration));
    });

    pause.addEventListener("click", function() {
        video.pause();
        pause.classList.add("hidden");
        play.classList.remove("hidden");
    });

    stop.addEventListener("click", function() {
        video.pause();
        video.currentTime = 0;
        pause.classList.add("hidden");
        stop.classList.add("hidden");
        time.classList.add("hidden");
        volume.classList.add("hidden");
        silent.classList.add("hidden");
        play.classList.remove("hidden");
    });


    volume.addEventListener("click", function() {
        video.muted = true;
        volume.classList.add("hidden");
        silent.classList.remove("hidden");
    });

    silent.addEventListener("click", function() {
        video.muted = false;
        silent.classList.add("hidden");
        volume.classList.remove("hidden");
    });
};

var maximo = 700;
var time = document.getElementById("timer");
function barraprogreso() {
    /*
    objeto video
    Propiedades
        -duration: duración del video
        -currenttime: Tiempo actual
        -paused: Video pausado
        - Ended: video finalizado
    Metodos
        - play()
        - pause()
    */
    
    if (video.ended == false) {
        //tiempo en el que me encuentro * maximo de tiempo, divido tiempo total del video
        var total = parseInt(video.currentTime*maximo/video.duration);
        //Rellena la barra
        time.style.widht = total+"px";
    };
};

window.onload =reproducir;