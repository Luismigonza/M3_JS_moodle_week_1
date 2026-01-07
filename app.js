// La funcion conectada al boton para que funcione
function miFuncion() {
    let text;
    // pide los datos al usuario
    let name = prompt("Ingrese su nombre: ");
    let age = prompt("Ingrese su Edad: ");

    // Se asegura de que la edad sea un entero
    if ( age != parseInt(age)){

        console.error("El dato en edad no es un numero");

        text = "Datos invalidos"

        alert("La edad ingresada no es un numero.");

    //Condicional si es menor de edad
    } else if (age < 18){

        console.log("Informacion ingresada con exito");

        text = "Hola " + name + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!";

    //Condicional si es mayor de edad
    } else if (age >= 18){

        console.log("Informacion ingresada con exito");

        text = "Hola " + name + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!";
    } else{

        text = "Informacion incorrecta";
    }

    //Envia el mensaje correspondiente al html
    document.getElementById("mensaje").innerHTML = text

}