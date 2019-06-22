class Calculadora {

    constructor(){
        this.resultado = 0;
    }
    
    sumar(valor1, valor2) {      
        var suma = parseFloat(valor1) + parseFloat(valor2);
        this.acumular(suma);    
    }

    restar(valor1, valor2) {
        var resta = parseFloat(valor1) - parseFloat(valor2);
        this.acumular(resta);
    }

    multiplicar(valor1, valor2) {
        var multiplicar = parseFloat(valor1) * parseFloat(valor2);
        this.acumular(multiplicar);
    }

    dividir(valor1, valor2) {
        var division = parseFloat(valor1) / parseFloat(valor2);
        this.acumular(division);
    }

    potencia(valor1, valor2) {
        var potencia = parseFloat(valor1) ** parseFloat(valor2);
        this.acumular(potencia);
    }

    limpiar() {
        console.log(this.resultado = 0);
    }

    acumular(resultado) {
        //this.resultado.push(resultado);
        this.resultado = resultado;
        //return this.resultado;
        this.getResultado();
    }

    getResultado (){
        console.log(this.resultados);
    }

    
}

class Cutronga extends Calculadora {
    constructor() {     
        super();
        var valor1 = 0;
        var valor2 = 0;   
    } 

    getValores() {
        this.valor1 = prompt("Escribe un valor");
        this.valor2 = prompt("Escribe otro valor");
    }

    sumando() {
        this.getValores();
        super.sumar(this.valor1,this.valor2);
        this.showResultado();
    }

    restando() {
        this.getValores();
        super.restar(this.valor1,this.valor2);
        this.showResultado();
    }

    multiplicando() {
        this.getValores();
        super.multiplicar(this.valor1,this.valor2);
        this.showResultado();
    }

    dividiendo() {
        this.getValores();
        super.dividir(this.valor1,this.valor2);
        this.showResultado();
    }

    potencia() {
        this.getValores();
        super.potencia(this.valor1,this.valor2);
        this.showResultado();
    }



    showResultado(){
        alert(this.resultado);
    }
}

var CalculadoraCutronga = new Cutronga();
console.log(CalculadoraCutronga.sumando());
console.log(CalculadoraCutronga.restando());
console.log(CalculadoraCutronga.multiplicando());
console.log(CalculadoraCutronga.dividiendo());
console.log(CalculadoraCutronga.potencia());
console.log(CalculadoraCutronga.limpiar());