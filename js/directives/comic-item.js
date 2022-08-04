app.directive('comicItem', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        item: '=' 
      }, 
      templateUrl: 'js/directives/comic-item.html' 
    }; 
});