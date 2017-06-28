console.log("Nesly!");

function welcomeFadeOut() {
  $( "#welcome-text" ).fadeOut( "slow", function() {
      // Animation complete.
  });
}

var fdout = setTimeout(welcomeFadeOut, 3000);
