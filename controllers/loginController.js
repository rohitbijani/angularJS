/****
*@author
*@date
*@purpose
*@description
****/
 myApp.controller('loginController', function($scope,$state){
   $scope.word = /^([a-zA-Z0-9])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
   $scope.validate = function() {
     $state.go('home.dashboard');
   }

 });

 // $scope.display="";
 // var x = document.forms["form"]["email"].value;
 // var y = document.forms["form"]["password"].value;
 //
 // if(x=="" || y==""){
 //   $scope.display="Incorrect EmailID or Password!"
 // }
 // else {
 //   $state.go('home.dashboard');
 // }
