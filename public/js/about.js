$(document).ready(function(){
  $("a").click(function(){
    $( "a" ).animate({
    height: "toggle",
    opacity: "toggle"
    }, "slow" );
  });
});