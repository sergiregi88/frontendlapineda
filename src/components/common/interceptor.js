(function(){
    angular.module('provapineda').config(function($httpProvider){
$httpProvider.interceptors.push(['$q', '$location', '$localStorage','urls', function ($q, $location, $localStorage,urls) {
   return {
       'request': function (config) {
           config.headers = config.headers || {};

           if ($localStorage.token) {


               config.headers.Authorization = 'Bearer ' + $localStorage.token;
           }
           return config;
       },
       'responseError': function (response) {
           if (response.status === 401 || response.status === 403) {
              // $location.path('/signin');
           }
           return $q.reject(response);
       }
   };
}]);
        })

    })
