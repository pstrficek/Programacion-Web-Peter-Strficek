window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var menuResponsive = document.querySelector('.menu-responsive');

    if (!menuResponsive.classList.contains("menu-responsive_visible")) {
        var scrollPosition = window.scrollY;
        var opacity = scrollPosition / 100;
        header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    } else {
        header.style.backgroundColor = "black";
    }
});

/*********************************************/

function scrollToSection(sectionId) {
    var destino = document.getElementById(sectionId);
    destino.scrollIntoView({ behavior: 'smooth' });
}

/*********************************************/
function iniciarMap(){
    var coords = [
        {lat: -34.6055413, lng: -58.3763923},
        {lat: -34.6417149, lng: -58.4063908},
        {lat: -34.6406136, lng: -58.4039297}
    ];
        
    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 12,
    center: coords[0],
    });
    
    coords.forEach(function(coord) {
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
    });
}

/*********************************************/

const menuResponsive = document.querySelector(".menu-responsive");
const responsiveIcon = document.querySelector(".responsive-icon img");
const links = document.querySelectorAll(".menu-responsive a");

responsiveIcon.addEventListener("click", () => {
    menuResponsive.classList.toggle("menu-responsive_visible");
    var header = document.querySelector('.header');
    header.style.backgroundColor = "black";
});


links.forEach(link => {
    link.addEventListener("click", () => {
        menuResponsive.classList.remove("menu-responsive_visible");
        var header = document.querySelector('.header');
        header.style.backgroundColor = "";
    });
});

/*********************************************/
/*********************************************/
/*********************************************/

function validarFormulario(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var email = document.getElementById('email').value
    var telefono = document.getElementById('telefono').value
    if (nombre == "" || email == "" || apellido == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    return {
        valido: true,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email
    };
}
/*********************************************/
var nombre, apellido, email, telefono; // Variables globales para almacenar nombre y apellido

document.getElementById('boton_1').addEventListener('click', function() {
    var resultadoValidacion = validarFormulario();
    if (resultadoValidacion.valido == true) {
        nombre = resultadoValidacion.nombre;
        apellido = resultadoValidacion.apellido;
        email = resultadoValidacion.email;
        telefono = resultadoValidacion.telefono;
        document.getElementById('primera-pestaña').classList.add('oculto');
        document.getElementById('segunda-pestaña').classList.remove('oculto');
    } 
});

var valorSeleccionado = ''; 
var elementosFormulario = document.getElementsByClassName('formulario-planes');
for (var i = 0; i < elementosFormulario.length; i++) {
    elementosFormulario[i].addEventListener('click', function(event) {
        for (var j = 0; j < elementosFormulario.length; j++) {
            elementosFormulario[j].classList.remove('activo');
        }
        this.classList.add('activo');
        event.stopPropagation();
        valorSeleccionado = this.getAttribute('id').split('-')[2];
    });
}

document.addEventListener('click', function() {
    for (var i = 0; i < elementosFormulario.length; i++) {
        elementosFormulario[i].classList.remove('activo');
    }
    for (var i = 0; i < elementosFormulario.length; i++) {
        if (elementosFormulario[i].classList.contains('activo')) {
            valorSeleccionado = elementosFormulario[i].getAttribute('id').split('-')[2];
            break;
        }
    }
});

document.getElementById('boton_2').addEventListener('click', function() {
    if (valorSeleccionado){
        switch (valorSeleccionado) {
            case '1':
                valorSeleccionado = 'basico';
                break;
            case '2':
                valorSeleccionado = 'pro';
                break;
            case '3':
                valorSeleccionado = 'vip';
                break;
        }
        document.getElementById('segunda-pestaña').classList.add('oculto')
        document.getElementById('tercera-pestaña').classList.remove('oculto')

    } else{
        alert('No se ha seleccionado ningún plan.');
    }
});

var valorSeleccionadoSemana = ''; 
var elementosFormularioSemana = document.getElementsByClassName('formulario-semana');
for (var i = 0; i < elementosFormularioSemana.length; i++) {
    elementosFormularioSemana[i].addEventListener('click', function(event) {
        for (var j = 0; j < elementosFormularioSemana.length; j++) {
            elementosFormularioSemana[j].classList.remove('activo');
        }
        this.classList.add('activo');
        event.stopPropagation();
        valorSeleccionadoSemana = this.getAttribute('id').split('-')[2];
    });
}

document.addEventListener('click', function() {
    for (var i = 0; i < elementosFormularioSemana.length; i++) {
        elementosFormularioSemana[i].classList.remove('activo');
    }
    for (var i = 0; i < elementosFormularioSemana.length; i++) {
        if (elementosFormularioSemana[i].classList.contains('activo')) {
            valorSeleccionadoSemana = elementosFormularioSemana[i].getAttribute('id').split('-')[2];
            break;
        }
    }
});

document.getElementById('boton_3').addEventListener('click', function() {
    if (valorSeleccionadoSemana){
        switch (valorSeleccionadoSemana) {
            case '1':
                valorSeleccionadoSemana = 'Lunes';
                break;
            case '2':
                valorSeleccionadoSemana = 'Martes';
                break;
            case '3':
                valorSeleccionadoSemana = 'Miercoles';
                break;
            case '4':
                valorSeleccionadoSemana = 'Jueves';
                break;
            case '5':
                valorSeleccionadoSemana = 'Viernes';
                break;
            case '6':
                valorSeleccionadoSemana = 'Sabado';
                break;
        }
        alert("Hola " + nombre + " " + apellido + ", tu primera visita a nuestro gimnasio es el " + valorSeleccionadoSemana + ", te esperamos! Plan Seleccionado: " + valorSeleccionado)
    }else{
        alert('No se ha seleccionado ningún dia.');
    }
});


