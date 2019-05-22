var cedula = false
var nombre = false
var apellido = false
var fecha = false
var correo = false
var pass = false

function validarC() {
    var bandera = false
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value.trim() == "") {
            bandera = true
            elemento.style.border = "1px solid red"
        }
    }
    console.log("cedula: " + cedula)
    console.log("nombre: " + nombre)
    console.log("apellido: " + apellido)
    console.log("fecha: " + fecha)
    console.log("email: " + correo)
    console.log("pass: " + pass)
    if (bandera) {
        alert("Llenar todos los campos")
        return false
    } else if (cedula == false || nombre == false || apellido == false || fecha == false || correo == false || pass == false) {
        alert("Corriga los campos")
        return false
    }
    else {
        return true
    }
}

function validarNumeros(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;

    if (letra >= 49 && letra <= 57 || letra == 8) {
        span.style.display = "none"
        if (element.id == 'cedula') {
            validarCedula(label, element)
        }
    } else {
        span.innerHTML = "Introdusca Numeros"
        span.style.display = "block"
        let text = element.value
        text = text.substring(0, text.length - 1)
        element.value = text
    }
}

function validarCedula(label, element) {
    let span = document.getElementById(label)
    if (element.value.length != 10) {
        span.innerHTML = "Cedula incorrecta"
        span.style.display = "block"
        cedula = false
    } else {
        span.style.display = "none"
        cedula = true
    }
}

function validarLetras(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;
    console.log(letra)
    if (letra >= 65 && letra <= 90 || letra == 32 || letra == 8 || letra == 16) {
        span.style.display = "none"
        validarNombres(label, element)
    } else {
        span.innerHTML = "Introdusca letras"
        span.style.display = "block"
        let text = element.value
        text = text.substring(0, text.length - 1)
        element.value = text
    }
}

function validarNombres(label, element) {
    let span = document.getElementById(label)
    let text = element.value
    if (text.split(" ").length > 2) {
        if (element.id == 'nombre') {
            span.innerHTML = "Nombres incorrectos"
            nombre = false
        } else {
            span.innerHTML = "Apellidos incorrectos"
            apellido = false
        }
        span.style.display = "block"
    } else {
        nombre = true
        apellido = true
        span.style.display = "none"
    }
}
function validarCorreo(label, element) {
    let email = element.value
    let span = document.getElementById(label)
    console.log(email.search("@est.ups.edu.ec"))
    if ((email.search("@ups.edu.ec") > 0) || (email.search("@est.ups.edu.ec") > 0)) {
        span.style.display = "none"
        correo = true
    } else {
        span.innerHTML = "Correo electronico incorrecto"
        span.style.display = "block"
        correo = false
    }
}

function validarFecha(label, element) {
    let span = document.getElementById(label)
    var string = String(element.value);
    arrayFecha = string.split("/");
    console.log(arrayFecha)
    var valor = new Date(arrayFecha[2], arrayFecha[1], arrayFecha[0]);
    console.log(isNaN(valor))
    if (isNaN(valor)) {
        fecha = false
        span.innerHTML = "Fecha incorrecta"
        span.style.display = "block"
    } else {
        fecha = true
        span.style.display = "none"
    }
}


function validarPass(label) {
    let span = document.getElementById(label)
    let pass1 = document.getElementById('pass').value
    let pass2 = document.getElementById('cpass').value
    if (pass1 != pass2) {
        span.innerHTML = "Las contraseñas no coinciden"
        span.style.display = "block"
        pass = false
    } else {
        span.style.display = "none"
        pass = true
    }
}