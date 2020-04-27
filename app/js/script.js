$("#earnings-phone").mask("+7(999) 999-99-99");

$("#earnings-reservation-phone").mask("+7(999) 999-99-99");

$("#employment-phone").mask("+7(999) 999-99-99");

$("#contacs-phone").mask("+7(999) 999-99-99");

$("#school-phone").mask("+7(999) 999-99-99");

$(document).ready(function() {
    $('.town-select').niceSelect();
  });
   
  $(document).ready(function() {
    $('.earnings__select-town').niceSelect();
  });
 
$(".nav-toggle").click(function() {
  $(this).toggleClass("open");
  $(".menu-adaptive").slideToggle();
  $("body").toggleClass("js-overflow");
});


