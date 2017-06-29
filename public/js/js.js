console.log("Nesly!");
function hidden() {
  $( "#nav" ).hide();
}
hidden();
function welcomeFadeOut() {
  $( "#welcome-text" ).fadeOut( "slow", function() {
      // Animation complete.
  });
  $( "#nav" ).show( "slow", function() {

  });
}

var fdout = setTimeout(welcomeFadeOut, 3000);
