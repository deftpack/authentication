(function (app) {
    'use strict';

    app.directive('navigateTo', function ($location) {
        return function (scope, element, attrs) {
            var path;
            attrs.$observe('navigateTo', function (val) { path = val; });
            element.bind('click', function () {
                scope.$apply(function () {
                    $location.path(path);
                });
            });
        };
    });
})(angular.module('accountApp'));