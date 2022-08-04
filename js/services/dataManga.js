app.factory('dataManga', ['$http', function($http) {
  return $http.get('../../dataManga.json')
    .success(function(data) {
      console.log(data);
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);