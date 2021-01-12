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