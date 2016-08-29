angular.module('app.router', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise("/");

        // console.log("Inside App.Router");
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/base/base.html',
                controller:'baseCtrl'
            });
        $locationProvider.html5Mode(true);
    })
    .run(function () {
    });
