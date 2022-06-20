$(function () {

  $('.burger').click(function() {
    $('.menu__list').toggleClass('menu__list--active')
    $('.burger').toggleClass('burger--active')
    $('.logo').toggleClass('logo--active')
  })

  var mixer = mixitup('.portfolio__gallery');
});