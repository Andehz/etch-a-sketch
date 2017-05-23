$(document).ready(function(){

  $("#gridContainer").hide();
  $("#gridContainer").fadeIn("slow");
  addGridBlocks();
  
  $(".gridBlock").hover(function(){
    $(this).css({"background": "black"});
  });
});

//Generates all grid elements to a 16x16 grid.
function addGridBlocks(){
  var block = '<div class="gridBlock">';
  var gridSize = 256;
  
  for(var i = 1; i <= gridSize; i++){
    $("#gridContainer").append(block);

  }
}
