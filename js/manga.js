var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/list.html',
        })

        .when('/list', {
            templateUrl : 'pages/list.html',
        })

        .when('/comment', {
            templateUrl : 'pages/comment.html',
        })

        .otherwise({redirectTo: '/'});
});


const h2title1 = document.querySelector("#title-chapter-1");
const h2title2 = document.querySelector("#title-chapter-2");

function check() {
    h2title1.classList.toggle('title-chapter-active');
    h2title2.classList.toggle('title-chapter-active');
}
