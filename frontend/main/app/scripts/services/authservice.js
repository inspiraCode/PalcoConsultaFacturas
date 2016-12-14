'use strict';

/**
 * @ngdoc service
 * @name appApp.authService
 * @description
 * # authService
 * Factory in the appApp.
 */
angular.module('appApp').factory('authService', function($http, $q, localStorageService, appConfig, userService, $rootScope, $location) {
    var serviceBase = appConfig.API_URL;
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };

    var _saveRegistration = function(registration) {

        _logOut();

        return $http.post(serviceBase + 'account/register', '=' + JSON.stringify(registration)).then(function(response) {
            return response;
        });

    };

    var _login = function(loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(serviceBase + 'token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {

            localStorageService.set('authorizationData', {
                token: response.access_token,
                userName: loginData.userName
            });

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;

            userService.loadAll().then(function(data) {
                $rootScope.currentUser = userService.getByUserName(loginData.userName);
                deferred.resolve(response);
            });


        }, function(err, status) {
            _logOut();
            if (!err) {
                err = {
                    error_description: 'Error. Server is not available.'
                };
            } else {
                if (err.error) {
                    err.error_description = err.error;
                }
            }
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function() {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";

        $location.path('/login');

    };

    var _fillAuthData = function() {

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            userService.loadAll().then(function(data) {
                $rootScope.currentUser = userService.getByUserName(authData.userName);
            });
        }

    }


    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
});
