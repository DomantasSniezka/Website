/*
	Function that displays the TopNavBar
	when the icon is pressed -->&#9776;
	on small screen devices
*/
function displayTopNav() {
    var x = document.getElementById("myTopnav");
	
    if (x.className === "topnav"){
        x.className += " responsive";
		
    }else{
        x.className = "topnav";
    }
}

/*
	Slideshow functions
*/


var index = 1;

/*
	Changes the next slide, depending on the button pressed
*/
function changeSlide(n) {
  showSlides(index += n);
  
}


//Displays slides -- beginning at slide 1
function showSlides(n) {
  var i;
  
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length){
	  index = 1
	  } 	  
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[index-1].style.display = "block";  
 
}

/*
	GOOGLE MAP FUNCTION
	function is taken from:
		https://developers.google.com/maps/documentation/javascript/tutorial
*/

function initMap() {
        var ucd = {lat: 53.308092, lng: -6.2294238};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: ucd
        });
		
        var marker = new google.maps.Marker({
          position: ucd,
          map: map
        });
}

function displaySubmit(){
	alert("Thank you, Your message has been sent")
}
  
	  