myApp.controller('homeController',function($scope,$mdSidenav,jsonRead){
  $scope.toggleLeft=buildToggler('left');

  function buildToggler(componentID) {
      return function() {
        $mdSidenav(componentID).toggle();
      };
    }

    // $scope.products = jsonRead.read();
    jsonRead.read().then(response=>{
      $scope.products = response.data;
      console.log($scope.products);
    });

    $scope.manufacturerArray=[];
    $scope.storageArray=[];
    $scope.osArray=[];
    $scope.cameraArray=[];

    angular.forEach($scope.products, function(value,key){
      $scope.manufacturerArray.push(value.specs.manufacturer);
      console.log($scope.manufacturerArray);
    });


});
