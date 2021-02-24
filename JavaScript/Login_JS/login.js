


function validar() {
    var a = document.getElementById("correo").value;

    var b = document.getElementById("Contrasena").value;


    if (a == null || b == null ) {
        document.getElementById("salida").innerHTML = "Los campos no pueden estar vacios";
    } else{
        document.getElementById("salida").innerHTML = "Loqueado correctamente"
    }
}