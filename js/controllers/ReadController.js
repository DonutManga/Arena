app.controller('ReadController', ['$scope','$routeParams', function($scope, $routeParams) {
    $scope.email = $routeParams.id;
}]);