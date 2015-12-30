//all elements are hidden by default


$(function(){




	// http://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text
		chrome.tabs.executeScript( {
	  code: "window.getSelection().toString();"
	}, function(selection) {
		if(selection != ""){
			selection = selection[0];
			loadReviews(selection);
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

		}else{
			search = "";
		}
   		 loadReviews(search);
	});

		$("#newsearch").click(function(event){
		event.preventDefault();
		$("#content").hide();
		$("#searchForm").show();
	});

// if results don't contain a bandbox, still result the recommendations, but fix the links, provide a link to query




function loadReviews(search){
	//the form might be hidden already
	$("#searchForm").fadeOut("fast");
	$("#reviews").empty();
	 
	 console.log("Search term: " + search);
	    if(search != "")
		{

		    var splitSearch = search.split();
		    var joinSearch = splitSearch.join("+");
		  
		    // it isn't joining correctly, but the query works.
		   	var  sputnikQuery = 
				"http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
				joinSearch + "&x=0&y=0"; 

			// fade in the spinner before search
			$("#spinner").fadeIn();
			$.ajax({
	                    url: sputnikQuery,
	                    success: function(data) {

			           var reviews = $(data).find(".plaincontentbox");
			   			// console.log(reviews[0]);
			   			// console.log(String(reviews[0]));
			   			if(typeof reviews[0] !== "undefined"){
			   				$("#reviews").append(reviews[0]);
			   				$("#reviews img").each(function() {
			   					var oldRelativeUrl = $(this).attr("src");
			   					$(this).attr("src", "http://www.sputnikmusic.com" + oldRelativeUrl);
							});
							$("td form").remove();
   							$("#spinner").fadeOut("fast");
				    		$("#content").show();
		   				
			   			}
			   			else{
			   				$("#artist").val(search);
   							$("#spinner").fadeOut("fast");
	   						$("#searchForm").show();

			   				$(".error").text("<p>No results were found, the artist may be misspelt.</p>");
			   			}


	                    },
	                    error:function(data){
     	   							$("#spinner").fadeOut("fast");
			   						$("#searchForm").show();
		                    		$(".error").html("<p>Something went wrong. Please try again.</p>");
	                    }
	                });

		}else{
		$("#searchForm").fadeIn("fast");

		$(".error").text("<p>No search term.</p>");

		}

	};



});



  