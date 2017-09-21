$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar, .navbar-brand, li').addClass('shrink');
  } else {
    $('.navbar, .navbar-brand, li').removeClass('shrink');
  }
});
