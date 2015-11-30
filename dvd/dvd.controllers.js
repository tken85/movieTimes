(function() {
  'use strict';

  angular
    .module('dvd')
    .controller('DVDController', function($scope, $routeParams, DVDService){
      var vm = this;
      DVDService.getPicks().then(function(picks){
        vm.critPicks = picks;
      });
      DVDService.getMovie().success(function(movie){
        console.log(movie);
      });

      vm.addMovie = function(movie){
        DVDService.addMovie(movie);
      };

    })
    .controller('MyDVDController', function($scope, $routeParams, $route, MyDVDService){
      var vm = this;
      var loadMyPicks = function(){
        MyDVDService.getMyPicks().success(function(picks){
          vm.myPicks = picks;
          });
      };

      loadMyPicks();

      vm.deleteMovie = function(movieId){
        MyDVDService.deleteMovie(movieId).success(function(){
        loadMyPicks();
        });
        //setTimeout(function(){$route.reload();}, 100);
      };

    });

}());
