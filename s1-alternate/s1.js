$(document).ready(function ($) {
        function init_map1() {
            var myLocation = new google.maps.LatLng(51.8423000, 0.7114370);
            var mapOptions = {
                center: myLocation,
                zoom: 16
            };
            var marker = new google.maps.Marker({
                position: myLocation,
                title: "Property Location"
            });
            var map = new google.maps.Map(document.getElementById("map1"),
                mapOptions);
            marker.setMap(map);
        }
        init_map1();
    });

$(document).ready(function($) {  
  function show_modal(){
    $('#compModal').modal();
  }
  window.setTimeout(show_modal, 5000);
});