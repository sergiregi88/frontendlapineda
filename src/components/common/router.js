(function(){
    var router=function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise("/state1");
    $stateProvider
    .state('signin',{
        url:'/signin',
        templateUrl:'components/auth/authSignin.html',
        controller:'authController as vm',
    })
    .state('signup',{
        url:'/signup',
        templateUrl:'components/auth/authSignup.html',
        controller:'authController as vm',
    })
    .state('home',{
        url:'/home',
        templateUrl:'components/site/home.html',
        controller:'homeController as vm'
    })
    .state('restricted',{
        url:'/resticted',
        templateUrl:'components/restricted/home.html',
        controller:'restrictedController as vm'
    })
     $urlRouterProvider.otherwise("/home");
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
};
angular.module("provapineda").config(router);
})();
