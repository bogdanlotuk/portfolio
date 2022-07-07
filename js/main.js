$(function () {
  
  $('.burger').click(function() {
    $('.burger').toggleClass('burger--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('.logo').toggleClass('logo--active');
    $('body').toggleClass('body--lock');
  })

  $('.menu__link, #navigation>.logo').click(function() {
    $('.burger--active').removeClass('burger--active');
    $('.menu__list--active').removeClass('menu__list--active');
    $('.logo--active').removeClass('logo--active');
    $('body').removeClass('body--lock');
  })
  
  $("#header, #footer").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });

  var lastScroll = 0;
  $(window).scroll(function(){
  var nowScroll = $(this).scrollTop();
  if (nowScroll > lastScroll){
    $('#navigation').show(3000).addClass('navigation--fixed');
    $('.burger').css('position', 'static');
  }
  });

  var mixer = mixitup('.portfolio__gallery');
});
