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
var nombre, apellido, email, telefono;

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

var elementosFormularioSemana = document.getElementsByClassName('formulario-semana');
var valorSeleccionadoSemana = 0;
for (var i = 0; i < elementosFormularioSemana.length; i++) {
    elementosFormularioSemana[i].addEventListener('click', function(event) {
        this.classList.toggle('activo');
    });
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.formulario-semana')) {
        for (var i = 0; i < elementosFormularioSemana.length; i++) {
            elementosFormularioSemana[i].classList.remove('activo');
        }
    }


    valorSeleccionadoSemana = 0
    for (var i = 0; i < elementosFormularioSemana.length; i++) {
        if (elementosFormularioSemana[i].classList.contains('activo')) {
            valorSeleccionadoSemana += 1;
        }
    }
}
);




document.getElementById('boton_3').addEventListener('click', function() {
    if (valorSeleccionadoSemana){
        precio = calcularPrecio(valorSeleccionado, valorSeleccionadoSemana)
        seleccion = true
        document.getElementById('tercera-pestaña').classList.add('oculto')
        document.getElementById('cuarta-pestaña').classList.remove('oculto')
        var mensaje = document.getElementById("formulario-completo");
        mensaje.innerHTML = "¡Ahora solo falta que nos vengas a visitar para tu día de prueba!<br>" +
    "Tu plan consiste de:<br>" +
    "Una membresía: " + valorSeleccionado + "<br>" +
    "Días a la semana: " + valorSeleccionadoSemana + "<br>" +
    "Un costo final de: $" + precio + "/mes";

    }else{
        alert('No se ha seleccionado ningún dia.');
    }
});

function calcularPrecio(plan, dias){
    var precioBase = 0;
    switch (plan) {
        case 'basico':
            precioBase = 10000;
            break;
        case 'pro':
            precioBase = 15000;
            break;
        case 'vip':
            precioBase = 20000;
            break;

    }

    if (dias <= 2) {
        porcentajeAdicional = 0;
    } else if (dias <= 4) {
        porcentajeAdicional = 0.1;
    } else if (dias <= 6) {
        porcentajeAdicional = 0.2;
    }

var precioTotal = precioBase + (precioBase * porcentajeAdicional);

return precioTotal;
}

