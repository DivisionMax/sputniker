/*Container for review data*/
// var content = document.getElementById("content"); 

// http://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text
$("#content").hide();
$("#spinner").hide();
$("#spinner").fadeIn();
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  loadReviews(selection);
});

function loadReviews(search){
	 search = search[0];
	   console.log("Search term: " + search);
	    // if(typeof splitSearch !== "undefined")
	    if(search != "")
	{

	    var splitSearch = search.split();
	    var joinSearch = splitSearch.join("+");
	    // it isn't joining correctly, but the query works.
	  
	  	var  sputnikQuery = 
			"http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
			joinSearch + "&x=0&y=0"; 
			console.log(sputnikQuery);

		$.ajax({
                    url: sputnikQuery,
                    success: function(data) {

		           var reviews = $(data).find(".plaincontentbox");
	
		   			// console.log(reviews[0]);
		   			// console.log(String(reviews[0]));
		   			if(typeof reviews[0] !== "undefined"){
		   				$("#content").append(reviews[0]);
		   				$("#content img").each(function() {
		   					var oldRelativeUrl = $(this).attr("src");
		   					$(this).attr("src", "http://www.sputnikmusic.com" + oldRelativeUrl);
						});
						$("td form").remove();
		   				
		   			}else{
		   				$("#content").append("<p>No results were found, the artist may be misspelt.</p>");
		   			}


                    },
                    error:function(data){
                    		$("#content").append("<p>Something went wrong. Please try again.</p>");
                    }
                });

			}else{
			// if there is no search term. Show the popup with a search box.
			console.log("No search term selected.");
			$("#content").append("<p>A search query was not chosen.</p>");
			}

			$("#spinner").fadeOut("fast");
    		$("#content").fadeIn("slow");
		
	} 
  