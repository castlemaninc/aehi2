

$( document ).ready(function() {
  console.log( "ready!" );

  $('.dropdown-trigger').dropdown();
  $('.sidenav').sidenav();
  $('.parallax').parallax();

  $(".metals-mobile-links").hide();

  $("#metals-link-mobile").click(function(){
    $(".metals-mobile-links").toggle(500);
  });

});