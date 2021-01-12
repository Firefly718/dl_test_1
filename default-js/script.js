$( document ).ready(function(){
  $( ".header__discount" ).mouseenter(function(){
    $( ".header__percent" ).css( "transform", "rotate(360deg)" );
  });
  $( ".header__discount" ).mouseleave(function(){
    $( ".header__percent" ).css( "transform", "rotate(0deg)" ); 
  });
});