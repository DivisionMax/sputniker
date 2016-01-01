$('table.plaincontentbox a').each(function(){
				console.log("Link:"+this.href);
				var urlSplit = this.href.split('/');
				console.log(urlSplit);
				var index = $.inArray("www.sputnikmusic.com",urlSplit);
				console.log("index:"+index);
 				var albumName = urlSplit[index+3]; 
 				console.log("Album name:"+albumName);
 				albumName = albumName.split("-").join(' ');
 				var youtubeQuery =  'https://www.youtube.com/results?search_query=' + albumName + ' full album';
 				console.log("Youtube query:"+youtubeQuery);
 			 var youtubeLink = $('<a></a>').text('YouTube').attr('href',youtubeQuery);
 				$(this).after(youtubeLink);});
