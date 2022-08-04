app.controller('HomeController', ['$scope','dataManga', function($scope,dataManga) {
    dataManga.success(function(data) {
        $scope.dataMangas = data;
        console.log($scope.dataMangas);
    });  
}]);