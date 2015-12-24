
// http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text

chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
   
 chrome.tabs.executeScript(tab.id, {
            "file": "content.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });

});





chrome.contextMenus.create(
	{title:"Get Reviews for %s",
	contexts: ['selection'],
	"onclick": getText}
	);

// function getSelectionText() {
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     return text;
// }

function getText(info, tab) {
var selection = info.selectionText;
addAlbum(selection);
 };


// function addAlbum(selection) {
//   var ul = document.getElementById("reviews");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(selection));
//   ul.appendChild(li);
// };



// http://www.sputnikmusic.com/search_results.php?genreid=37&search_in=Bands&search_text=   band name seperated by pluses       &x=0&y=0