// hero section  toggler
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
    document.body.classList.toggle('centered-content');

});


// slider images

$(document).ready(function() {
    var a = $('.slider').bxSlider({
      minSlides: 1,
      maxSlides: 5,
      mode: 'horizontal',
      adaptiveHeight: true,
      slideWidth: 500,
      moveSlides: 5,
    });
  });