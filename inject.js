var  link = $("#sputnikLinked");
if(link.length==0){
$('table.plaincontentbox a').each(function(){
				var urlSplit = this.href.split('/');
				var index = $.inArray("www.sputnikmusic.com",urlSplit);
 				var albumName = urlSplit[index+3]; 
 				albumName = albumName.split("-").join(' ');
 				var youtubeQuery =  'https://www.youtube.com/results?search_query=' + albumName + ' full album';
 			 	var youtubeLink = $('<a></a>').text('YouTube').attr('href',youtubeQuery).attr("class","sputnikMusicLink");
 				$(this).after(youtubeLink);});
				var marker = $('<span></span>').attr("id","sputnikLinked");
				$("body").append(marker);	
}




