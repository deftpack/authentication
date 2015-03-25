(function(app) {
    'use strict';

    var validator = function() {
        return {
            hasLowercase: function(value) { return /[a-z]+/.test(value); },
            hasUppercase: function(value) { return /[A-Z]+/.test(value); },
            hasDigit: function(value) { return /[0-9]+/.test(value); },
            hasNonAlphaNumeric: function(value) { return /^[0-9A-Za-z]+/.test(value); }
        };
    };

    app.directive('passwordRequire', function () {
        var check = validator();

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {        
                ctrl.$parsers.unshift(function(value) {
                    if (value) {
                        var config = scope.$eval('{' + attrs.passwordRequire + '}');
                        var valid =     (!config.length || value.length >= config.length) &&
                                        (config.digit === check.hasDigit(value)) &&
                                        (config.lowercase === check.hasLowercase(value)) &&
                                        (config.uppercase === check.hasUppercase(value)) &&
                                        (config.nonLetterOrDigit === check.hasNonAlphaNumeric(value));
                        ctrl.$setValidity('password', valid);
                    }
                    return valid ? value : undefined;
                });
            }
        };
    });
})(angular.module('accountApp'));