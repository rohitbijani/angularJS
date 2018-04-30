myApp.controller('homeController',function($scope,$mdSidenav){
  $scope.toggleLeft=buildToggler('left');
    
  function buildToggler(componentID) {
      return function() {
        $mdSidenav(componentID).toggle();
      };
    }
});
