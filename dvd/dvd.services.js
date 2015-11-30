(function() {
  'use strict';

  angular
    .module('dvd')
    .factory('DVDService', function($http, _){
      var myUrl = "https://tiny-tiny.herokuapp.com/collections/movieTimesMyDVDs";

      var mapData = function(collection){
        return _.map(collection, function(obj){return {title: obj.display_title, image: obj.multimedia.resource.src, summary: obj.summary_short, rev_link: obj.link.url, showtimes: obj.related_urls[1].url};
        });
      };
        var picksUrl= 'http://api.nytimes.com/svc/movies/v2/reviews/dvd-picks.json?order=by-date&api-key=296617c878332bb4eff9b9cdab89d511:19:73616991';

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
          $http.post(myUrl, movie);
        };

        return {
          getPicks: getPicks,
          getMovie: getMovie,
          addMovie: addMovie,
        };
    })
    .factory('MyDVDService', function($http, _){

      var myUrl = "https://tiny-tiny.herokuapp.com/collections/movieTimesMyDVDs";

      var getMyPicks = function(){
        return $http.get(myUrl);
      };

      var deleteMovie = function(movieId){
        $http.delete(myUrl + '/' + movieId);
      };

      return {
        deleteMovie: deleteMovie,
        getMyPicks: getMyPicks,
      };
    });
}());
