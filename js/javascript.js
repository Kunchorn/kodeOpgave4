console.log("javascript is running, get after it");

/* Burgermenu start------------------------------------------------- */
var wss_i = 0;
var wss_array = ["Fyns", "Militærhistoriske", "Museum"];
var wss_elem;
function wssNext() {
    wss_i++;
    wss_elem.style.opacity = 0;
    if (wss_i > (wss_array.length - 1)) {
        wss_i = 0;
    }
    setTimeout('wssSlide()', 1000);
}
function wssSlide() {
    wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
    setTimeout('wssNext()', 3000);
}
wss_elem = document.getElementById("wss"); wssSlide();

function toggleNavPanel(x) {
    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH = "600px"; /* max længde af container skal være større end Css value */
    if (panel.style.height == maxH) {
        panel.style.height = "0px";
        navarrow.innerHTML = "&#9776";
    } else {
        panel.style.height = maxH;
        navarrow.innerHTML = "&#9776";
    }
}

/* Burgermenu slut---------------------------------- */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}


function myFunction() {
  var element = document.getElementById("toggle");
  element.classList.toggle("slideshow-fullscreen");

  // toggles fullscreen for imageSlider
  var element = document.getElementById("toggle-image1");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image2");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image3");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image4");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image5");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image6");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image7");
  element.classList.toggle("text-fullscreen");
  var element = document.getElementById("toggle-image8");
  element.classList.toggle("text-fullscreen");

  // hides the close button on imageSlider when not on fullscreen, by toggling on and off class="hide-close"
  var element = document.getElementById("toggle-close1");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close2");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close3");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close4");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close5");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close6");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close7");
  element.classList.toggle("hide-close");
  var element = document.getElementById("toggle-close8");
  element.classList.toggle("hide-close");

  // hides the open button on imageSlider when in fullscreen, by toggling on and off class="hide-open"
  var element = document.getElementById("toggle-open1");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open2");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open3");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open4");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open5");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open6");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open7");
  element.classList.toggle("hide-open");
  var element = document.getElementById("toggle-open8");
  element.classList.toggle("hide-open");


  // toggles the gallery on and off when in fullscreen
  var element = document.getElementById("hidden");
  element.classList.toggle("img-list-hidden");

  // toggles the positions of prev and next button
  var element = document.getElementById("toggle3");
  element.classList.toggle("next-fullscreen");
  var element = document.getElementById("toggleprev");
  element.classList.toggle("prev-fullscreen");
}

