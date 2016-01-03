
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
// no empty check - you can't access the context menu without an input

function openSputnik(selection){

      var newUrl = "http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=" + 
          selection + "&x=0&y=0"; 
      chrome.tabs.create({ url: newUrl, active:false },
        function(tab){
      });
  }

  // sputnikmusic.com/bands/Rise-Against/67/
function checkUrl(url){
  if (url.toLowerCase().indexOf("sputnikmusic.com/bands/") >= 0){
      return true;

    }
    else{
      return false;
    }
}

// changing the url in your current tab is recognized
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(tab.status=="complete"){
           if(checkUrl(tab.url)){
    console.log("page updated and it's Sputnik page" + tabId);
       chrome.tabs.executeScript(tab.id, { file: "jquery-1.11.3.min.js"}, function() {
          chrome.tabs.executeScript(tab.id, {file: 'inject.js'});
      });
   } 

    }

});