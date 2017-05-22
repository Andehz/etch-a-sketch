$(document).ready(function(){
	
	$("#gridContainer").hide();
	$("#gridContainer").fadeIn("slow");
	addGridBlocks();
});

//Generates all grid elements to a 16x16 grid.
function addGridBlocks(){
	var block = '<div class="gridBlock"></div>';

	for(var i = 1; i <= 256; i++){
		$("#gridContainer").append(block);
    if(i % 16 === 0){
          $("#gridContainer").append("<br>");
    }
	}
}
