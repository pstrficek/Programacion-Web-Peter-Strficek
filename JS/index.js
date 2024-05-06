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

