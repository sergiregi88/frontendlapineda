
(function(){
"use strict"
    angular.module("provapineda",['ui.router','ngStorage','angular-loading-bar'])
    .constant('urls',{
              BASE_AUTH_URL:'http://auth.backlapineda.app/api/v1',
    ADMIN_URL:'http://admin.backlapineda.app/api/v1',
        SITE_URL:'http://site.backlapineda.app/api/v1' ,

              })


})();


