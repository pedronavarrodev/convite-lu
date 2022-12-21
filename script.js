$("#change").click(function() {
    $("#change").html("Sim");
    $("#move").show();
  });
  
  $("#move").hover(function() {
    change();
  });
  
  function change()
  {
      var i = Math.floor(Math.random()*1000)+1;
      var j = Math.floor(Math.random()*800)+1;
      $("#move").css({top: j+'px',left: i+'px'});
  }