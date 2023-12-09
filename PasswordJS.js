// Generador de contraseñas en JavaScript con frases
// generator of passwords in JavaScript with phrases

// Juan Manuel Fernandez
// https://github.com/juanmfer/

function limpiar() {
    // funcion para limpiar los campos y eliminar las clases de error o todook.
    document.getElementById("frase1").value='';
    document.getElementById("frase2").value='';
    document.getElementById("frase3").value='';
    document.getElementById("resultados").innerHTML = '';
    document.getElementById("resultados").classList.remove("error");
    document.getElementById("resultados").classList.remove("todook");
}
function frasesConcatenadas() {
    // funcion para concatenar las frases
    const resultados = document.getElementById("resultados");
    // se remueven las clases de error o todook previamente agregadas
    if (resultados.classList.contains("error")) {
        resultados.classList.remove("error");
    } else {
        resultados.classList.remove("todook");
    }
    // se eliminan espacios en blancos y saltos de linea.
    const frase1 = document.getElementById("frase1").value.replace(/[\s\n]/g, '');
    const frase2 = document.getElementById("frase2").value.replace(/[\s\n]/g, '');
    const frase3 = document.getElementById("frase3").value.replace(/[\s\n]/g, '');
    const radio = obtenerValoresRadios();
    // si alguna de las frases estan vacias, nos dara error
    if (frase1 === "" || frase2 === "" || frase3 === "" || radio === null) {
        resultados.classList.add("error");
        resultados.innerHTML = "Todos los campos son obligatorios";
        return false;
    }
    // si las frases estan completas, se concatenan a frase
    const frase = frase1 + frase2 + frase3;
    // si la longitud de la frase es menor que el radio, nos dara error
    if(frase.length < radio) {
        // se agrega la clase error para mostrar el error en rojo
        resultados.classList.add("error");
        resultados.innerHTML = "La longitud de las frases debe ser mayor o igual a " + radio + " the length of the phrases must be greater than or equal to " + radio;
        return false;
    }
    // si la longitud de la frase es mayor o igual que el radio, se genera el password
    // se agrega la clase todook para mostrar el password en verde
    resultados.classList.add("todook");
    mostrarpassword = generandoPassword(frase, radio);
    return resultados.innerHTML = "Password generado / generated: " + mostrarpassword;
}
function generandoPassword(frase, radio) {
    // radio es la cantidad de caracteres que contendra el password
    // division, es la division entre frase y radio, que el numero entre caracter y caracter seleccionado.
    const division = Math.floor(frase.length / radio);
    let password = "";
    // se itera atraves de la frase para generar el password, y suma a password un caracter, cada division
    for (let i = 0; i < frase.length; i += division) {
        if (password.length < radio) {
            password += frase[i];
        } else {
            break;
        }
    }
    return password;

}
// con esta funcion se obtiene el valor del radio checked
function obtenerValoresRadios() {
    const option1 = document.querySelector('input[name="passwordcaracteres"][value="long8"]');
    const option2 = document.querySelector('input[name="passwordcaracteres"][value="long12"]');
    const option3 = document.querySelector('input[name="passwordcaracteres"][value="long16"]');
    return (option1?.checked && 8) || (option2?.checked && 12) || (option3?.checked && 16) || null;
}