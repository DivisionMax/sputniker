/*Container for review data*/
var content = document.getElementById("content"); 

// http://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  loadReviews(selection);
});

function loadReviews(search){
  	var xmlhttp;
	
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        	
           if(xmlhttp.status == 200){
           	// console.log(xmlhttp.responseText);
           var reviews = $(xmlhttp.responseText).find(".plaincontentbox");
           
  // var p = document.createElement("p");
  // p.appendChild(document.createTextNode(xmlhttp.xml));
   // content.appendChild(p);
   			console.log(reviews[0]);
   			console.log(String(reviews[0]));
           	content.appendChild(reviews[0]);
           	console.log("Data appended");
          //     	var jsonText = JSON.parse(xmlhttp.responseText);
		        // console.log(jsonText);
         }
           else if(xmlhttp.status == 400) {
              
              content.innerHTML = 'There was an error 400';
           }
           else {
           	content.innerHTML = 'something else other than 200 was returned';
           }
        }
    }
    console.log(search[0]);
    var splitSearch = search[0].split();
    var joinSearch;
    var sputnikQuery;
    if(typeof splitSearch !== "undefined")
{
  	joinSearch = splitSearch.join("+");
  	console.log(joinSearch);
  	sputnikQuery = 
		"http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
		joinSearch + "&x=0&y=0"; 
  	
  	console.log(sputnikQuery);
} 
	
		
    xmlhttp.open("GET", sputnikQuery , true);
    xmlhttp.send();

 // $.ajax({
 //                    url: "http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=rise+against&x=0&y=0",
 //                    success: function(data) {
 //                        $('#content').innerhtml(data);
 //                    },
 //                    error:function(data){
 //                    		$('#content').innerhtml("failed");
 //                    }
 //                });
}
  