/****
*@author
*@date
*@purpose
*@description
****/
 myApp.controller('loginController', function($scope,$state){
   $scope.word = /^([a-zA-Z0-9])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
   $scope.validate = function() {
     var x=$scope.email;
     console.log("email",x);
     $state.go('home.dashboard');
   }
 });
