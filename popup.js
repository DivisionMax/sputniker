$(function(){

		$("#artist").focus();


	// http://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text
		chrome.tabs.executeScript( {code: "window.getSelection().toString();"}, function(selection) {
		if(selection != ""){
			selection = selection[0];
			openSputnik(selection);
		}
		else{
			// show the form
			$("#searchForm").show();
			}
	  
	});


	
	// handle events
	$("#artist").keyup(function(event){
	    if(event.keyCode == 13){
	        $("#search").click();
	    }
	});
	
	$("#search").click(function(event){
		event.preventDefault();

		var search = $("#artist").val();
		if (search){
			openSputnik(search);
		}else{
			$(".error").text("Please enter an arist name").show().delay(2500).fadeOut();

		}
   		 
	});

function openSputnik(selection){
		var newUrl = "http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
				selection + "&x=0&y=0"; 
				var id;
 		chrome.tabs.create({ url: newUrl, active:false},function(tab){
 			id = tab.id;		
		});
		// background page handles creating youtube links 

}); //document.ready

