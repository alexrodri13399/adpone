function myFunction() {
    //Recogemos el valor del input
    var dato = document.getElementById("datos").value;
    //Convertimos a Array
    var datos = Array.from(dato);
    //Recogemos el párrafo donde saldrá el resultado
    var mensaje = document.getElementById("mensaje");
    //Cada vez que le damos a enviar ponemos el resultado en blanco para que no se acomule
    mensaje.innerHTML = '';
    //Ponemos contador a 0;
    cont = 1;
    //Hacemos un for de toda la array
    for (let i = 0; i < datos.length; i++) {
        //Hacemos este if para empezar con [
        if (i == 0) {
            mensaje.innerHTML += '[';
        }
        //Hacemos un if para comprobar si el siguiente caracter es igual
        if (datos[i] == datos[i + 1]) {
            //Hacemos un while para contar los caracteres iguales que se repiten en las siguientes posiciones
            while (datos[i] == datos[i + 1]) {
                cont = cont + 1;
                i++;
            }
            //Añadimos el primer caracter al párrafo
            mensaje.innerHTML += '["' + datos[i] + '",' + cont + ']';
            cont = 1;
        } else {
            //Si el siguiente no coincide mostramos este mensaje
            cont = 1;
            mensaje.innerHTML += '["' + datos[i] + '",1]';
        }
        //Comprobamos que habrá otro carácter para poner coma
        if (i + 1 < datos.length) {
            mensaje.innerHTML += ', ';
        }
        //Si es el último caracter cerramos con ]
        if (i == datos.length - 1) {
            mensaje.innerHTML += ']';
        }
    }
}

function borrar() {
    var mensaje = document.getElementById("mensaje");
    //Cada vez que le damos a enviar ponemos el resultado en blanco para que no se acomule
    mensaje.innerHTML = '';
    document.getElementById("datos").value = "";
}