
// add the context menu item
chrome.runtime.onInstalled.addListener(function() {

  var context = "selection";
  var title = "Open on SputnikMusic";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

chrome.contextMenus.onClicked.addListener(function(info,tab){

if (info.menuItemId === "contextselection") { // here's where you'll need the ID
	
        chrome.tabs.executeScript(null,
    {code:"window.getSelection().toString();"}, function(selection) {
    		openSputnik(selection);
    });
    
    	
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
