

$(document).ready(function() {

	/// Disable inactive links in the 'projects' section
	$(".big-div-projects a").each(function() {
	   if( $(this).attr("href") == "#" ){
	      $(this).click(function(e) {
	         e.preventDefault();
	         e.stopPropagation();
	      });
	   }
	});
	
});