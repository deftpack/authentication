(function (app) {
    'use strict';

    app.directive('passwordToggle', function() {
        return {
            restrict: 'A',
            compile: function(element, attrs) {
                element.
                    css('cursor', 'pointer').
                    css('pointer-events', 'auto').
                    bind('click', function () {
                        element.toggleClass(attrs.passwordShownClass).toggleClass(attrs.passwordHiddenClass);
                        var target = document.getElementById(attrs.passwordToggle);
                        target.type = target.type == 'password' ? 'text' : 'password';
                });
            }
        };
    });
})(angular.module('accountApp'));