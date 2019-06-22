class Calculadora {
    constructor(){
        this.resultados = 0;
    }
    sumar(valor1, valor2){
        var suma = parseInt(valor1) + parseInt(valor2);
        this.acumular(suma);
    }
    restar(valor1,valor2){
        var resultado = parseInt(valor1) - parseInt(valor2);
        this.acumular(resultado);
        return this.resultados;
    }
    dividir(valor1,valor2){
        var resultado = parseInt(valor1) / parseInt(valor2);
        this.acumular(resultado);
        return this.resultado;
    }
    multiplicar(valor1,valor2){
        var resultado = parseInt(valor1) * parseInt(valor2);
        this.acumular(resultado);
        return this.resultado;
    }
    potencia(valor1,valor2){
        var resultado = parseInt(valor1) ** parseInt(valor2);
        this.acumular(resultado);
        return this.resultado;
    }
    acumular(resultado){
        this.resultados = resultado;
        return this.resultados;
    }
    limpiar(){
        console.log(this.resultados = 0);
    }
}

class Visual extends Calculadora {
    constructor(){
        super();  
    }
    getvalores(){
        this.valor1 = document.getElementById("valorPrimero").value;
        this.valor2 = document.getElementById("valorSegundo").value;
    }
    sumando() {
        this.getvalores();
        super.sumar(this.valor1,this.valor2);
        this.showResultado();
    }
    restando() {
        this.getvalores();
        super.restar(this.valor1,this.valor2);
        this.showResultado();
    }
    multiplicando(){
        this.getvalores();
        super.multiplicar(this.valor1,this.valor2);
        this.showResultado();
    }
    dividiendo(){
        this.getvalores();
        super.dividir(this.valor1,this.valor2)
        this.showResultado();
    }
    potencia(){
        this.getvalores();
        super.potencia(this.valor1,this.valor2)
        this.showResultado();
    }
    
    showResultado(){
        document.getElementById("resultado").value = this.resultados;
    }

    borrar() {
        var borrando = this.resultados = 0;
        document.getElementById("resultado").value = borrando;
    }
}

var calculadoraVisual = new Visual();