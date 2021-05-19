$(document).ready(function() {
  $('.home-carousel').slick();

  $(window).scroll(function() {
    var header = $('header');
    if(header.offset().top > 100) {
      header.addClass('scrolled-down');
    }
    else {
      header.removeClass('scrolled-down');
      header.addClass('scrolled-up');
    }
  });
});