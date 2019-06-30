class Zoologico {
    constructor (nombre, ubicacion, maxaforo,horario) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.maxaforo = maxaforo;
        this.horario = horario;
    };
}

class Animal extends Zoologico {
    super (nombreAnimal, fNacimiento, salud, paisOrigen) {
        this.nombreAnimal = nombreAnimal;
        this.fNacimiento = fNacimiento;
        this.salud = salud;
        this.paisOrigen = paisOrigen;
    }
}

class Area extends Animal {
    super (nombreArea, descripcion, animales) {
        this.nombreArea = nombreArea;
        this.descripcion = descripcion;
        this.animales = animales;
    }
}