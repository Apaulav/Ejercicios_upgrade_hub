function edad (){

    año = prompt("¿En que año naciste?");

    mes = prompt("¿En que mes naciste?");

    dia = prompt("¿En que día naciste?");

    var fechaActual = new Date().toLocaleDateString("es-ES", options);

    console.log(fechaActual);

    var fechaNacimiento = new Date(dia+"-"+mes+"-"+año).toLocaleDateString("es-ES", options);

    console.log(fechaNacimiento);

    var diff = fechaActual - fechaNacimiento;

    diff = diff.toLocaleDateString("es-ES", options);

    return diff;}

edad();

// function edad() {

//     var fechaNacimiento = [];
//     //Pedir al usuario el año
//     var año = prompt("Escribe tu año de nacimiento");
//     //Pedir al usuario el mes
//     var mes = prompt("Escribe tu mes de nacimiento");
//     //Pedir al usuario el día
//     var dia = prompt("Escribe tu día de nacimiento");

//     año = parseInt(año);
//     mes = parseInt(mes);
//     dia = parseInt(dia);

//     //Calcular cuantos años tiene
//     //Para calcular los años restamos el día de hoy menos su fecha de cumpleaños
//     /* fechaNacimiento.push(dia);
//     fechaNacimiento.push(mes);
//     fechaNacimiento.push(año); */

//     console.log(fechaNacimiento);

    
//     var temp =  new Date(mes + "-" + dia + "-" + año);

//     console.log(temp);

// /* 
//     var hoy = new Date();
//     console.log(hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear()); */



//     //cumpleaños hay que restarselo al día de hoy

//     /* var fechaInicio = new Date('2016-07-12').getTime();
//     var fechaFin    = new Date('2016-08-01').getTime();

//     var diff = fechaFin - fechaInicio;
//  */

// }

// edad();