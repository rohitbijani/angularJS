myApp.service('jsonRead', function() {
    this.read = function (x) {
        return {
          function ($scope,$http) {
            $http.get("assets/products.json").then(function(response) {$scope.names = response;});
            console.log($scope.names);
          }
        };
      }
    });
