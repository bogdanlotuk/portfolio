$(function () {
  
  $('.burger').click(function() {
    $('.burger').toggleClass('burger--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('.logo').toggleClass('logo--active');
    $('.title').toggleClass('title--active');
  })

  $('.menu__link').click(function() {
    $('.burger--active').removeClass('burger--active');
    $('.menu__list--active').removeClass('menu__list--active');
    $('.logo--active').removeClass('logo--active');
    $('.title--active').removeClass('title--active');
  })

  var mixer = mixitup('.portfolio__gallery');
});