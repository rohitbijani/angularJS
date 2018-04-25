/****
*@author
*@date
*@purpose
*@description
****/
 myApp.controller('loginController', function($scope,$state){
   $scope.word = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   $scope.validate = function() {
     $scope.display="";
     var x = document.forms["form"]["email"].value;
     var y = document.forms["form"]["password"].value;

     if(x!="bridgeit@gmail.com" || y!="bridgeit"){
       $scope.display="Incorrect EmailID or Password!"
     }
     else {
       $state.go('home');
     }
   }
 });
