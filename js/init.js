

$( document ).ready(function() {
  console.log( "ready!" );

  $('.dropdown-trigger').dropdown();
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();  
  
  
  $(".metals-mobile-links").hide();

  $("#metals-link-mobile").click(function(){
    $(".metals-mobile-links").toggle(500);
  });
  

  $('.collapsible').collapsible();
  $('input#input_text, textarea#textarea2').characterCounter();

  $('.dropdown-trigger-2').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });

  
  
    
  

});