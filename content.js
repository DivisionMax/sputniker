// chrome.contextMenus.create(
// 	{title:"Get Reviews for %s",
// 	contexts: ['selection'],
// 	"onclick": getText}
// 	);

// // function getSelectionText() {
// //     var text = "";
// //     if (window.getSelection) {
// //         text = window.getSelection().toString();
// //     } else if (document.selection && document.selection.type != "Control") {
// //         text = document.selection.createRange().text;
// //     }
// //     return text;
// // }

// function getText(info, tab) {
// var selection = info.selectionText;
// addAlbum(selection);
 
// };


// function addAlbum(selection) {
//   var ul = document.getElementById("reviews");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(selection));
//   ul.appendChild(li);
// };
    var xmlhttp;
	var content = document.getElementById("content");
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

    xmlhttp.open("GET", "http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=rise+against&x=0&y=0", true);
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