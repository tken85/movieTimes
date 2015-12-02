(function() {
  'use strict';

  angular
    .module('theaters')
    .controller('TheatersController', function($scope, $routeParams, TheatersService){
      var vm = this;
      TheatersService.getPicks().then(function(picks){
        vm.critPicks = picks;
        console.log("picks", picks);
      });
      TheatersService.getMovie().success(function(movie){
      });

      vm.addMovie = function(movie){
        TheatersService.addMovie(movie);
      };
    })
    .controller('MyTheatersController', function($scope, $routeParams, $route, MyTheatersService){
      var vm = this;
      var loadMyPicks = function(){
        MyTheatersService.getMyPicks().success(function(picks){
          vm.myPicks = picks;
        });
      };
      loadMyPicks();
      vm.deleteMovie = function(movieId){
        MyTheatersService.deleteMovie(movieId).success(function(){
          loadMyPicks();
        });

      };
    });

}());
