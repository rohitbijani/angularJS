myApp.controller('homeController',function($scope,$mdSidenav){
  $scope.toggleLeft=buildToggler('left');
  $scope.isOpenLeft = function(){
    return $mdSidenav('left').isOpen();
  };

  function buildToggler(componentID) {
      return function() {
        $mdSidenav(componentID).toggle();
      };
    }
});
