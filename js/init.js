(function($){
  $(function(){
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $(".metals-mobile-links").hide();
    $("#metals-link-mobile").click(function(){
      $(".metals-mobile-links").toggle(500);
    });

    console.log("ready");

  }); // end of document ready
})(jQuery); // end of jQuery name space
