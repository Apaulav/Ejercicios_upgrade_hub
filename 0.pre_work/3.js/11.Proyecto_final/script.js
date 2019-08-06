function campoTexto () {
    let TextNull = document.getElementById('texto').value;
    if (TextNull !== "") {
        let divTexto = document.createElement('div');
        //Se crea label
        let labelTexto = document.createElement('label');
        //Se crea input
        let inputTexto = document.createElement('input');
        //Se crea un atributo que indiqye qye es tipo text
        inputTexto.type="text";
        //Se coge valor que se introduce en el input de la izquierda
        let inputValor = document.getElementById('texto').value;
        //Se mete el texto de la izquierda en el atributo name
        inputTexto.name = inputValor;
        //Se mete el texto de la izquierda en el label
        labelTexto.innerText = inputValor;
        //Se crea en la derecha el div, label y el input
        document.getElementById('section-drcha').appendChild(divTexto);
        document.getElementById('section-drcha').appendChild(labelTexto);
        document.getElementById('section-drcha').appendChild(inputTexto);
    }
    else {
        alert("Introduce la etiqueta que quieres que lleve en campo de texto");
    }
}
function campoNumero () {

    //Se crea la estructura
    let divNumero = document.createElement('div');
    let labelNumero = document.createElement('label');
    let inputNumero = document.createElement('input');
    inputNumero.type="number";
    //Se coge valor que se introduce en el input de la izquierda
    let inputValor = document.getElementById('numero').value;
    //Se mete el texto de la izquierda en el atributo name
    inputNumero.name = inputValor;
    //Se mete el texto de la izquierda en el label
    labelNumero.innerText = inputValor;
    //Se crea en la derecha el div, label y el input
    document.getElementById('section-drcha').appendChild(divNumero);
    document.getElementById('section-drcha').appendChild(labelNumero);
    document.getElementById('section-drcha').appendChild(inputNumero);
}
function campoMail() {
    let divMail = document.createElement('div');
    //Se crea label
    let labelMail = document.createElement('label');
    //Se crea input
    let inputMail = document.createElement('input');
    inputMail.type="email";
    //Se coge valor que se introduce en el input de la izquierda
    let inputValor = document.getElementById('mail').value;
    //Se mete el texto de la izquierda en el atributo name
    inputMail.name = inputValor;
    //Se mete el texto de la izquierda en el label
    labelMail.innerText = inputValor;
    //Se crea en la derecha el label y el input
    document.getElementById('section-drcha').appendChild(divMail);
    document.getElementById('section-drcha').appendChild(labelMail);
    document.getElementById('section-drcha').appendChild(inputMail);
}
function campoLista () {

    if (document.querySelector('.si').checked) {
        let inputValor = []; 
        inputValor = document.getElementById('lista').value;
        inputValor = inputValor.split(',');
        
        for(let i of inputValor) {
            let inputRadio = document.createElement('input');
            inputRadio.type="radio";
            inputRadio.name="radio";
            let divRadio = document.createElement('div');
            divRadio.className = "div-radio-button";
            let labelRadio = document.createElement('label');
            labelRadio.innerText = i;
            document.querySelector('.section-drcha').appendChild(divRadio);   
            document.querySelector('.div-radio-button').appendChild(labelRadio);
            document.querySelector('.div-radio-button').appendChild(inputRadio);
        };
    }
    else if (document.querySelector('.no').checked) {
        let inputValor = []; 
        inputValor = document.getElementById('lista').value;
        inputValor = inputValor.split(',');
        
        for(let i of inputValor) {
            let inputCheckbox = document.createElement('input');
            inputCheckbox.type="checkbox";
            inputCheckbox.name="checkbox";
            
            let divRadio = document.createElement('div');
            divRadio.className = "div-radio-button";
            let labelRadio = document.createElement('label');
            labelRadio.innerText = i;
            document.querySelector('.section-drcha').appendChild(divRadio);   
            document.querySelector('.div-radio-button').appendChild(labelRadio);
            document.querySelector('.div-radio-button').appendChild(inputCheckbox);
        };
    }
    else {
        alert("Por favor indique si se pueden selecionar varias opciones o no en la lista de selección");
    }
}

function boton () {
    let divboton = document.createElement('div');
    //Se crea input
    let inputboton = document.createElement('input');
    inputboton.type="button";
    //Se coge valor que se introduce en el input de la izquierda
    let inputValor = document.getElementById('boton').value;
    //Se mete el texto de la izquierda en el label
    inputboton.value = inputValor;
    //Se crea en la derecha el label y el input
    document.getElementById('section-drcha').appendChild(divboton);
    document.getElementById('section-drcha').appendChild(inputboton);
}




