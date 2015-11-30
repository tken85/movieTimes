(function() {
  'use strict';

  angular
    .module('theaters')
    .controller('TheatersController', function($scope, $routeParams, TheatersService){

      TheatersService.getPicks().then(function(picks){
        $scope.critPicks = picks;
        console.log("picks", picks);
      });
      TheatersService.getMovie().success(function(movie){
      });

      $scope.addMovie = function(movie){
        TheatersService.addMovie(movie);
      };
    })
    .controller('MyTheatersController', function($scope, $routeParams, MyTheatersService){
      MyTheatersService.getMyPicks().success(function(picks){
        $scope.myPicks = picks;
      });

      $scope.deleteMovie = function(movieId){
        MyTheatersService.deleteMovie(movieId);
      };
    });

}());
