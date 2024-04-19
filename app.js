
document.addEventListener("DOMContentLoaded", function() {
    // Seleccions el formulario por su nombre
    var formulario = document.forms["form"];

    // Agregar un evento 'submit' al formulario
    formulario.addEventListener("submit", function(event) {
        // Prevenir el comportamiento por defecto de envío del formulario
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        var nombre = formulario.elements["nombre"].value.trim();
        var email = formulario.elements["email"].value.trim();
        var asunto = formulario.elements["asunto"].value.trim();
        var mensaje = formulario.elements["mensaje"].value.trim();

        // Validar campo Nombre
        if(nombre== ''){
            alert('El campo Nombre no puede estar vacio');
            return false;
        } else if(nombre.length > 50){
            alert('El campo Nombre no puede tener mas de 50 caracteres');
            return false;
        }
        
        // Validar campo Emal
        var valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email == ''){
            alert('El campo Email no puede estar vacio');
            return false;
        } else if(!valEmail.test(email)){
            alert('El campo Email debe estar en formato válido.');
            return false;
        }

        // Validar campo Asunto
        if(asunto == ''){
            alert('El campo Asunto no puede estar vacio');
            return false;
        } else if(nombre.length > 50){
            alert('El campo Asunto no puede tener mas de 50 caracteres');
            return false;
        }

        // Validar campo Mensaje
        if(mensaje == ''){
            alert('El campo Mensaje no puede estar vacio');
            return false;
        } else if(nombre.length > 300){
            alert('El campo Mensaje no puede tener mas de 50 caracteres');
            return false;
        }

        enviarFormulario(nombre, email, asunto, mensaje);
        alert('Mensaje Enviado');
        return true;
    });

    
    function enviarFormulario(nombre, email, asunto, mensaje) {
        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
        console.log("Asunto: " + asunto);
        console.log("Mensaje: " + mensaje);
    }
});
