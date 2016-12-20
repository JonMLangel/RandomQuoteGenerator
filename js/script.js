var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1ckMJ2ZvM3jJnm_arND67bb-3mCZl6kHNaBggXVUvSYA/pubhtml';

var sheet_data;

function init() {
  Tabletop.init( {
    key: public_spreadsheet_url,
    callback: saveData,
    simpleSheet: true
    });
}

function saveData(data, tabletop) {
  sheet_data = data;
}

 var newQuote = function(newQuote) {
    var randNum = Math.floor(Math.random() * (sheet_data.length));
   var author;
  $("#author").html(sheet_data[randNum].Author).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function(){
      $(this).removeClass();
    //author = $("#author").html(sheet_data[randNum].Author);
  });   $("#advice").html(sheet_data[randNum].Advice).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function(){
      $(this).removeClass();
      $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + $('#advice').text() + $('#author').text() + '"' + ' Get a Random Quote at http://codepen.io/JonLangel/pen/kXdmqP');
     });
}

$(document).ready(function() {

  init();

  $('.container-fluid').click(function() {
    newQuote();
  });
});
