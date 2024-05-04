window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var opacity = scrollPosition / 100; // Ajusta 500 según la velocidad deseada

    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});

/*********************************************/
function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}