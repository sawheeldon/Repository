//this example relates to the Skodo App

//Soccerama api
3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0

https://api.soccerama.pro/v1.2/livescore?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0
https://api.soccerama.pro/v1.2/standings/season/{id}?api_token=__YOURTOKEN__
https://api.soccerama.pro/v1.1/videos/match/{id}?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0

//global var

var newsArea = $('#latestNewsArea');
var logos = $('#logos');

//on click hide
//danish league
var hideDen = function () {
  $('#denLogo').click(function() {
  $('.wholePage').hide( 1, function() {
    alert( "Animation complete." );
  });
});
}
//scottish league

var hideScot = function () {
  $('#scotLogo').click(function() {
  $('.wholePage').hide( 1, function() {
    alert( "Animation complete." );
  });
});
}

var hideScot = function () {
  $( "#clickme" ).click(function() {
  $( "#book" ).hide( "slow", function() {
    alert( "Animation complete." );
  });
});
}



//general news feed for main page
var news = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035',
      success: function(data){
          console.log('success', data);
          console.log(data);

          var latNewsOne = data.articles[0].description;
          var latNewsTwo = data.articles[1].description;
          var latNewsThree = data.articles[2].description;
          var latNewsFour = data.articles[3].description;
          var latNewsFive = data.articles[4].description;

          document.getElementById("latestNewsOne").innerHTML = latNewsOne ;
          document.getElementById("latestNewsTwo").innerHTML = latNewsTwo ;
          document.getElementById("latestNewsThree").innerHTML = latNewsThree ;
          document.getElementById("latestNewsFour").innerHTML = latNewsFour ;
          document.getElementById("latestNewsFive").innerHTML = latNewsFive ;
      }
      });

};

//livescore functions

var liveScore = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://api.soccerama.pro/v1.2/livescore?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0',
      success: function(data){
          console.log('success', data);
          console.log(data);

          // var denScore = data;
          // var scotScore = data;
          //
          // document.getElementById("").innerHTML =  ;
      }
      });

};


//highlights function

var highlights = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://api.soccerama.pro/v1.1/videos/match/{id}?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0',
      success: function(data){
          console.log('success', data);
          console.log(data);

          // var denScore = data;
          // var scotScore = data;
          //
          // document.getElementById("").innerHTML =  ;
      }
      });

};
