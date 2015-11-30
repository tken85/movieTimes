(function() {
  'use strict';

  angular
    .module('dvd')
    .controller('DVDController', function($scope, $routeParams, MovieService){
      MovieService.getPicks().success(function(picks){
        console.log(picks);
      });
      MovieService.getMovie().success(function(movie){
        console.log(movie);
      });
    })
    .controller('MyDVDController', function($scope, $routeParams, MovieService){
      console.log('mydvd controller');
    });

}());
