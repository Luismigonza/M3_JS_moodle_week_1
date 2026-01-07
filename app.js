function miFuncion() {
    let text;
    let name = prompt("Ingrese su nombre: ");
    let age = prompt("Ingrese su Edad: ")

    if ( age != parseInt(age)){

        console.error("El dato en edad no es un numero");

        text = "Datos invalidos"

        alert("La edad ingresada no es un numero.");
    } else if (age < 18){

        text = "Hola " + name + ", Usted es menor de edad"

    } else if (age >= 18){

        text = "Hola " + name + ", Usted ya puede buscar trabajo" 
    } else{

        text = "Informacion incorrecta"
    }

    document.getElementById("mensaje").innerHTML = text

}