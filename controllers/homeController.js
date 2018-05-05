myApp.controller('homeController',function($scope,$mdSidenav,jsonRead,_){
  $scope.toggleLeft=buildToggler('left');

  function buildToggler(componentID) {
      return function() {
        $mdSidenav(componentID).toggle();
      };
    }

    $scope.manufacturerArray=[];
    $scope.storageArray=[];
    $scope.osArray=[];
    $scope.cameraArray=[];
    $scope.selected=[];

    jsonRead.read().then(response=>{
      $scope.products = response.data;
      console.log($scope.products);
      angular.forEach($scope.products, function(value,key){
        $scope.manufacturerArray.push(value.specs.manufacturer);
        $scope.storageArray.push(value.specs.storage);
        $scope.osArray.push(value.specs.os);
        $scope.cameraArray.push(value.specs.camera);
      });
      $scope.manufacturerArray = _.uniq($scope.manufacturerArray);
      $scope.storageArray = _.uniq($scope.storageArray);
      $scope.osArray = _.uniq($scope.osArray);
      $scope.cameraArray = _.uniq($scope.cameraArray);
      console.log($scope.manufacturerArray);
    });

    $scope.checkbox = function(item,list){
      var idx = list.indexOf(item);
       if (idx > -1) {
         list.splice(idx, 1);
       }
       else {
         list.push(item);
       }
    };
    
    $scope.exists = function (item, list) {
       return list.indexOf(item) > -1;
     };
});
