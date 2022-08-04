var app = angular.module('pageAnime', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
  	.when('/manga/:id', {
      controller: 'MangaController',
      templateUrl: 'views/manga.html'
    })
    .when('/manga/read/:id',{
        controller : 'ReadController',
        templateUrl : 'views/read.html'
    })
    .when('/news',{
        controller : 'NewController',
        templateUrl : 'views/news.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});