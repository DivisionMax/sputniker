function openSputnik(selection){
		var newUrl = "http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
				selection + "&x=0&y=0"; 
 		chrome.tabs.create({ url: newUrl },function(tab){

		chrome.tabs.executeScript(tab.id, { file: "jquery-1.11.3.min.js" }, function() {
		    chrome.tabs.executeScript(tab.id, {file: 'inject.js'});
		});

		});
}