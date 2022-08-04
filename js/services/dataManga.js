app.factory('dataManga', ['$http', function($http) {
  return $http.get('https://raw.githubusercontent.com/DonutManga/Arena/main/dataManga.json')
    .success(function(data) {
      console.log(data);
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);
