var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1YknbF6q4qLRDPiPhjCYE0PpK24kVI5WCaTJZ5Nw_Tyo/pubhtml?gid=0&single=true';

var sheet_data;

function init() {
  console.log("Getting Data From public Google Sheet");
	Tabletop.init( { 
		key: public_spreadsheet_url, 
		callback: saveData,
		simpleSheet: true
	});
}

function saveData(data, tabletop) {
	sheet_data = data; 
}

// get new quote from the public spreadsheet
var newQuote = function(newQuote) {
  console.log("Called newQuote");
	var randNum = Math.floor(Math.random() * (sheet_data.length));
	var author;

	$("#author").html(sheet_data[randNum].Author).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  
    function(){  
		  $(this).removeClass();
		//author = $("#author").html(sheet_data[randNum].Author);
	});        

	$("#advice").html(sheet_data[randNum].Advice).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function(){  
		$(this).removeClass();
	});
}

  

var newTweet = function() {
  console.log("Called newTweet");
	// select twitter button href attribute to send a tweet with quote content
  $('.tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + $('#advice').text() +
  $('#author').text() + '"' + ' Get a Random Quote at https://codepen.io/JonLangel/pen/kXdmqP'); 
	return false;
}

$(document).ready(function() {
   
  init();
  
  $('.wrapper').click(function() {
	  newQuote();
  });
  
  $('#twitter-button').click(function() {
	  newTweet();
  });
	
});
