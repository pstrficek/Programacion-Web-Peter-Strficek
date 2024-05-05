window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var opacity = scrollPosition / 100; // Ajusta 500 según la velocidad deseada

    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
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

