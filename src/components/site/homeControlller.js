(function(){

    angular.module("provapineda").controller("homeController",function(Auth,$rootScope, $localStorage,$scope){
        $scope.token=$localStorage.token;
        $scope.tokenClaims=Auth.getTokenClaims();
    })

})()
