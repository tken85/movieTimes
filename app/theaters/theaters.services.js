(function() {
  'use strict';

  angular
    .module('theaters')
    .factory('TheatersService', function($http, _){

      var myUrl = "https://tiny-tiny.herokuapp.com/collections/movieTimesMyTheaters";

      var mapData = function(collection){
        return _.map(collection, function(obj){return {title: obj.display_title, image: obj.multimedia.resource.src, summary: obj.summary_short, rev_link: obj.link.url, showtimes: obj.related_urls[1].url};
        });
      };
        var picksUrl= 'http://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-date&api-key=296617c878332bb4eff9b9cdab89d511:19:73616991';

        var movieUrl = "http://api.nytimes.com/svc/movies/v2/reviews/search.json?query='Rocky+Balboa'&order=by-title&api-key=296617c878332bb4eff9b9cdab89d511:19:73616991";

        var getPicks = function(){
          return $http.get(picksUrl).then(function(data){
            console.log("data.data.results",data.data.results);
            return mapData(data.data.results);
          });
        };
        var getMovie=function(){
          return $http.get(movieUrl);
        };

        var addMovie = function(movie){
          var picks = [];
          var myMovies = function(){
            return $http.get(myUrl);
          };

          myMovies().success(function(data){
            picks = data;
            if(_.where(picks, {title: movie.title}).length===0){
            return $http.post(myUrl, movie);
            }
            else{
              alert("movie already in your picks");
            }
          });


        };

        return {
          getPicks: getPicks,
          getMovie: getMovie,
          addMovie: addMovie,
        };
    })
    .factory('MyTheatersService', function($http, _){

      var myUrl = "https://tiny-tiny.herokuapp.com/collections/movieTimesMyTheaters";

      var getMyPicks = function(){
        return $http.get(myUrl);
      };
      var deleteMovie = function(movieId){
        return $http.delete(myUrl + '/' + movieId);
      };

      return {
        getMyPicks: getMyPicks,
        deleteMovie: deleteMovie,
      };
    });
}());
