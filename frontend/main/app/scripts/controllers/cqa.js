'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:CqaCtrl
 * @description
 * # CqaCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('CqaCtrl', function($scope, formController, CQAHeaderService) {
    $scope.screenTitle = 'CQA Form';

    var ctrl = new formController({
        scope: $scope,
        entityName: 'CQAHeader',
        baseService: CQAHeaderService,
        afterCreate: function(oResult) {
            // go('/cqa?id=' + oResult.id);
        },
        afterLoad: function() {}
    });

    ctrl.load();
});
