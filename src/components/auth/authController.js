(function(){

    'use strict';


//
//
//  var authController=function($http){
//        var vm = this;
//
//        vm.login=function() {
//console.log("sssssss");
//            var credentials = {
//                login: vm.login,
//                password: vm.password
//            }
//
//            $http.post('http://auth.backlapineda.app/api/v1/login',credentials)
//            .success(function(data){
//                console.log(data);
//            });
//
//
//        };
//
//    };
//  angular
//        .module("provapineda")
//        .controller('authController', authController);
    angular.module('provapineda')
   .controller('authController', ['$rootScope', '$scope', '$location', '$localStorage', 'Auth',
       function ($rootScope, $scope, $location, $localStorage, Auth) {
           var vm=$scope;
           function successAuth(res) {
               console.log(res,"ssss");
               $localStorage.user=res.user;
               $localStorage.token = res.token;
             //  window.location = "/";

           }

           vm.signin = function () {
               var formData = {
                   login: vm.login,
                   password: vm.password
               };

               Auth.signin(formData, successAuth, function () {
                   $rootScope.error = 'Invalid credentials.';
               })
           };

           vm.signup = function () {
               var formData = {
                   username:vm.username,
                   email: vm.email,
                   password: vm.password,
                   password_confirmation:vm.password
               };

               Auth.signup(formData, successAuth, function () {
                   $rootScope.error = 'Failed to signup';
               })
           };

           vm.logout = function () {
               Auth.logout(function () {
                   condole.log("ssss");
                   window.location = "/"
               });
           };
           vm.token = $localStorage.token;
           vm.tokenClaims = Auth.getTokenClaims();
       }])
})();
