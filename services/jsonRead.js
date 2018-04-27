myApp.service('jsonRead', function() {
    this.read = function (x) {
        return {
          function ($scope,$http) {
            $http.get("assets/products.json").success(function(response) {$scope.names = response;});
          }
        };
      }
    });
