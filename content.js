$(function(){
	// http://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text
		chrome.tabs.executeScript( {
	  code: "window.getSelection().toString();"
	}, function(selection) {
		if(selection != ""){
			selection = selection[0];
			openSputnik(selection);
		}else{
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
			$(".error").text("Please enter an arist name").show().delay(5000).fadeOut();

		}
   		 
	});

function openSputnik(selection){
		var newUrl = "http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
				selection + "&x=0&y=0"; 
 		chrome.tabs.create({ url: newUrl },function(tab){

		chrome.tabs.executeScript(tab.id, { file: "jquery-1.11.3.min.js" }, function() {
		    chrome.tabs.executeScript(tab.id, {file: 'inject.js'});
		});

		});
		}

	});