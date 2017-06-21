'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:customerForm
 * @description
 * # customerForm
 */
angular.module('appApp').directive('customerForm', function() {
    return {
        template: '<div><input type="text" class="form-control" ng-model="baseEntity.Value" /></div>',
        restrict: 'E',
        controller: function($scope, formController, CustomerService) {

            $scope.screenTitle = 'Customer';

            var ctrl = new formController({
                scope: $scope,
                entityName: 'Customer',
                baseService: CustomerService,
                afterCreate: function(oEntity) {},
                afterLoad: function(oEntity) {}
            });

            $scope.$on('modal_ok', function() {
                $scope.save($scope.baseEntity).then(function() {
                    $('#modal-Customer').modal('hide');
                });
            });

            $scope.$on('load_customer_form', function(scope, oEntity) {
                if (oEntity.id > 0) {
                    ctrl.load(oEntity.id);
                } else {
                    ctrl.load(oEntity);
                }
            });

        }
    };
});
