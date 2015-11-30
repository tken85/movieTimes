(function() {
  'use strict';
  angular
    .module('apimods')
    .controller('MainController', function($scope, $routeParams, MovieService){
      MovieService.getPicks().success(function(picks){
        console.log(picks);
      });
      MovieService.getMovie().success(function(movie){
        console.log(movie);
      });
    });

}());
