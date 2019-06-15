class Calculadora {

    constructor(){
        this.resultado = [];
    }
    
    sumar(valor1, valor2) {      
        var suma = parseFloat(valor1) + parseFloat(valor2);
        this.acumular(suma);    
    }

    restar(valor1, valor2) {
        var resta = parseFloat(valor1) + parseFloat(valor2);
        this.acumular(resta); 
    }

    multiplicar(valor1, valor2) {
        var multiplicar = parseFloat(valor1) + parseFloat(valor2);
        this.acumular(multiplicar);
    }

    dividir(valor1, valor2) {
        var division = parseFloat(valor1) + parseFloat(valor2);
        this.acumular(division);
    }

    potencia(valor1, valor2) {
        var potencia = parseFloat(valor1) ** parseFloat(valor2);
        this.acumular(potencia);
    }

    limpiar() {
        console.log(this.resultado = []);
    }

    acumular(resultado) {
        this.resultado.push(resultado);
        console.log(this.resultado);
    }

    
}

var miCalculadora = new Calculadora();
console.log(miCalculadora.sumar(2,3));
console.log(miCalculadora.restar(2,3));
console.log(miCalculadora.multiplicar(2,3));
console.log(miCalculadora.dividir(2,3));
console.log(miCalculadora.potencia(2,3));
console.log(miCalculadora.limpiar());