$(document).ready(function(){
  var gridSize = 16;
  
  $("#gridContainer").hide();
  $("#gridContainer").fadeIn("slow");
  addGridBlocks(gridSize);
  
  //Reset grid on button click
  $("button").click(function(){
    gridSize = prompt("Grid size?")
    $("#gridContainer").empty();
    addGridBlocks(gridSize);
    $(".gridBlock").hover(function(){
      $(this).css({"background": setRGB()});
    });
  });
  
  //Changes color when arrow is over it
  $(".gridBlock").hover(function(){
    $(this).css({"background": setRGB()});
  });
});

function setRGB(){
  var valueR = Math.floor(Math.random() * 256);
  var valueG = Math.floor(Math.random() * 256);

  var valueB = Math.floor(Math.random() * 256);
  return "rgb(" + valueR + ", " + valueG + ", " + valueB +")";
}
//Generates all grid elements to a 16x16 grid to start.
function addGridBlocks(totalBlocks){
  var block = '<div class="gridBlock">';
  
  for(var i = 0; i < getTotalBlocks(totalBlocks); i++){
    $("#gridContainer").append(block);

  }
  
  setBlockSize(totalBlocks);
}

//sets size of each block in em.
function setBlockSize(size){
  //35 is default size of whole grid.
  var blockSize = 35/size + "em";
  
  $(".gridBlock").width(blockSize);
  $(".gridBlock").height(blockSize);
}

function getTotalBlocks(gridSize){
  var totalBlocks = gridSize * gridSize;

  return totalBlocks;
}