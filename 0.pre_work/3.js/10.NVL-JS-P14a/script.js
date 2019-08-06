window.onload = function pelicula () {
    var pelis = [
        {
          "Nombre": "El señor de los anillos",
          "Genero": "Acción"
        }, 
        {
          "Nombre": "Regreso al Futuro",
          "Genero": "Acción"
        },
        {
          "Nombre": "Los increibles 2",
          "Genero": "Animación"
        },
        {
            "Nombre": "Venon",
            "Genero": "Fantasia"
        }, 
        {
            "Nombre": "John wick",
            "Genero": "Acción"
        }, 
        {
            "Nombre": "The Warriors, los amos de la noche",
            "Genero": "Acción"
        },
        {
            "Nombre": "En busca de la felicidad",
            "Genero": "drama"
        },
        {
            "Nombre": "Pretty woman",
            "Genero": "romantica"
        },
        {
            "Nombre": "Los mercenarios",
            "Genero": "Acción"
        },
        {
            "Nombre": "La roca",
            "Genero": "Acción"
        },
        {
            "Nombre": "Ghost",
            "Genero": "romantica"
        },
        {
            "Nombre": "El niño con el pijama de rayas",
            "Genero": "drama"
        },
        {
            "Nombre": "Rompe Ralph",
            "Genero": "Animación"
        },
        {
            "Nombre": "Terminator",
            "Genero": "Acción"
        },
        {
            "Nombre": "Avatar",
            "Genero": "Fantasia"
        },
        {
            "Nombre": "La vida es bella",
            "Genero": "drama"
        },
        {
            "Nombre": "Sherk",
            "Genero": "Animación"
        },
        {
            "Nombre": "Jungla de Cristal",
            "Genero": "Acción"
        },
        {
            "Nombre": "Los vengadores",
            "Genero": "Fantasia"
        },
        {
            "Nombre": "Fast and furiuos",
            "Genero": "Acción"
        }
      ];

    var desordenada = document.createElement('ul');
    var tableBody = document.querySelector('.table-body');
    tableBody.appendChild(desordenada);
    

    for (var i in pelis) {
        var lista = document.createElement('li');
        lista.style = "font-size: 20px";
        desordenada.appendChild(lista);
        lista.textContent = pelis[i].Nombre;
        var generospan = document.createElement('span');
        lista.appendChild(generospan);
        if (pelis[i].Genero === "Acción") {
            let imageObj = document.createElement('img');
            imageObj.style = "margin-left: 10px; width: 30px";
            imageObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KARxmv5V2CzM-7cQBtcli3X55FvGiLj4AHFTTnRCSeEC0m8w";
            generospan.appendChild(imageObj);
            // generospan.textContent = "Es de genero accion";
        } else if (pelis[i].Genero === "Animación") {
            let imageObj = document.createElement('img');
            imageObj.style = " c margin-left: 10px; width: 30px";
            imageObj.src = "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7740557.jpg";
            generospan.appendChild(imageObj);
//            generospan.textContent = "Es de genero Animación";
        } else if (pelis[i].Genero === "Fantasia") {
            let imageObj = document.createElement('img');
            imageObj.style = "margin-left: 10px; width: 40px";
            imageObj.src = "https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX3367902.jpg";
            generospan.appendChild(imageObj);
//            generospan.textContent = "Es de genero Animación";
        } else if (pelis[i].Genero === "romantica") {
            let imageObj = document.createElement('img');
            imageObj.style = "margin-left: 10px; width: 40px";
            imageObj.src = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/937250/1160/772/m1/fpnw/wm0/cm2-.png?1453812193&s=5217994e82c02eff564b3876d50822db";
            generospan.appendChild(imageObj);
//            generospan.textContent = "Es de genero Animación";
        } else if (pelis[i].Genero === "drama") {
            let imageObj = document.createElement('img');
            imageObj.style = "margin-left: 10px; width: 20px";
            imageObj.src = "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1950590.jpg";
            generospan.appendChild(imageObj);
//            generospan.textContent = "Es de genero Animación";
        } else {
            generospan.textContent = "No existe icono para este genero";
        };
        
    };

    
    
    
    
    



    
}
