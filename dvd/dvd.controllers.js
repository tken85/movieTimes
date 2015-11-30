(function() {
  'use strict';

  angular
    .module('dvd')
    .controller('DVDController', function($scope, $routeParams, DVDService){
      DVDService.getPicks().then(function(picks){
        $scope.critPicks = picks;
      });
      DVDService.getMovie().success(function(movie){
        console.log(movie);
      });

      $scope.addMovie = function(movie){
        DVDService.addMovie(movie);
      };

    })
    .controller('MyDVDController', function($scope, $routeParams, $route, MyDVDService){
      var loadMyPicks = function(){
        MyDVDService.getMyPicks().success(function(picks){
          $scope.myPicks = picks;
          });
      };

      loadMyPicks();

      $scope.deleteMovie = function(movieId){
        MyDVDService.deleteMovie(movieId).success(function(){
        loadMyPicks();
        });
        //setTimeout(function(){$route.reload();}, 100);
      };

    });

}());
