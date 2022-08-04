app.controller('MangaController', ['$scope','$routeParams','dataManga', function($scope, $routeParams,dataManga) {
    dataManga.success(function(data) {
        $scope.manga = data.find(el=>el.id==$routeParams.id)
    });
}]);