

$( document ).ready(function() {
  console.log( "ready!" );

  $('.dropdown-trigger').dropdown();
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();  
  
  
  $(".metals-mobile-links").hide();
  $(".metals-links").hide();



  $("#metals-link-mobile").click(function(){
    $(".metals-mobile-links").toggle(500);    
  });

  

  $('.collapsible').collapsible();
  $('input#input_text, textarea#textarea2').characterCounter();

  

});