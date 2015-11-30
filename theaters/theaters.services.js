(function() {
  'use strict';

  angular
    .module('theaters')
    .factory('MovieService', function($http, _){

        var picksUrl= 'http://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-date&api-key=296617c878332bb4eff9b9cdab89d511:19:73616991';

        var movieUrl = "http://api.nytimes.com/svc/movies/v2/reviews/search.json?query='Rocky+Balboa'&order=by-title&api-key=296617c878332bb4eff9b9cdab89d511:19:73616991";

        var getPicks = function(){
          return $http.get(picksUrl);
        };
        var getMovie=function(){
          return $http.get(movieUrl);
        };

        return {
          getPicks: getPicks,
          getMovie: getMovie,
        };
    });
}());
