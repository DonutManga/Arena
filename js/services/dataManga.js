app.factory('dataManga', ['$http', function($http) {
  return $http.get('../../json/dataManga.json')
    .success(function(data) {
      console.log(data);
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);