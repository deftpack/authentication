(function (angular) {
    'use strict';

    var app = angular.module('accountApp', ['ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: '/Views/login.html',
                controller: 'loginController'
            }).
            when('/registration', {
                templateUrl: '/Views/registration.html',
                controller: 'registrationController'
            }).
            when('/forgotPassword', {
                templateUrl: '/Views/forgotPassword.html',
                controller: 'forgotPasswordController'
            }).
            when('/updatePassword', {
                templateUrl: '/Views/updatePassword.html'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);

})(angular);
