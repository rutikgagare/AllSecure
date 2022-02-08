
let close = document.getElementById('close');
let ham = document.getElementById('ham');
let nav = document.getElementById('nav-bar');
let register = document.getElementById('registration');

// media query for window size greater than 1000
var x = window.matchMedia("(min-width: 1000px)")

// logic for closing and opening navbar
close.addEventListener('click', ()=>{
    nav.style.transform = "translatex(-350px)";

    // Applying media query if width > 1000
    if (x.matches) {
      register.style.transform='translatex(0rem)';
    }   
});

ham.addEventListener('click', ()=>{
    nav.style.transform = "translatex(0)";

    // Applying media query if width > 1000
    if (x.matches) {
      register.style.transform='translatex(7rem)';
      slider.style.transform='translatex(10rem)';
    }    
})

// javascript logic for slideshow
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
   // Change image every 2 seconds
}

var slideIndex = 0;
carousel();










