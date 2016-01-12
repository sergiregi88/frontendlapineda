    angular.module('provapineda')
   .factory('Data', ['$http', 'urls', function ($http, urls) {

       return {
           getRestrictedData: function (success, error) {
               $http.get(urls.BASE_AUTH + '/restricted').success(success).error(error)
           },
           getApiData: function (success, error) {
               $http.get(urls.BASE_API + '/restricted').success(success).error(error)
           }
       };
   }
   ]);
