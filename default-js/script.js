//  percent hover animation
$( document ).ready(function(){
  $( ".header__discount" ).mouseenter(function(){
    $( ".header__percent" ).css( "transform", "rotate(360deg)" );
  });
  $( ".header__discount" ).mouseleave(function(){
    $( ".header__percent" ).css( "transform", "rotate(0deg)" ); 
  });
});



// slick slider
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // fade: true,
    // cssEase: 'linear',
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow__right"></div>',
    prevArrow: '<div class="arrow arrow__left"></div>'
  });
});




// burger catalog
$(document).ready(function(){
  $("#header > div.header__cat").css('display', 'flex');
  $("#header > div.header__cat").hide();

  $("#header > nav > div > div > div.header__catalog").click(function(){
    // console.log('click');
    $("#header > div.header__cat").toggle('slow', 'swing');

    $('body').toggleClass('bg-secondary');
    $('.slider__item').toggleClass('bg-secondary');
  });
});

// phones window
$(document).ready(function(){
  $("#header > nav > div > div > div.header__contact > div.header__phones").css('display', 'flex');
  $("#header > nav > div > div > div.header__contact > div.header__phones").hide();
  $("#header > nav > div > div > div.header__contact").click(function(){
    // console.log('click');
    $("#header > nav > div > div > div.header__contact > div.header__phones").toggle('slow', 'swing');
  });
});