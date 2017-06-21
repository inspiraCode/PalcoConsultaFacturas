'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('CustomersCtrl', function($scope, listController, CustomerService) {

    $scope.screenTitle = 'Customers';

    var listCtrl = new listController({
        scope: $scope,
        entityName: 'Customer',
        baseService: CustomerService,
        afterCreate: function(oEntity) {
            $('#modal-Customer').off('shown.bs.modal').on('shown.bs.modal', function(e) {
                $scope.$apply(function() {
                    //on show modal
                    $scope.$broadcast('load_customer_form', oEntity);
                    $('#modal-Customer').find('input').filter(':input:visible:first').focus();
                });
            }).off('hidden.bs.modal').on('hidden.bs.modal', function(e) {
                $scope.$apply(function() {
                    //on hide modal'
                    $scope.$broadcast('unload_customer_form');
                    listCtrl.load();
                });
            }).modal('show');
        },
        afterLoad: function() {
            $scope.filterLabel = "Total Customers Current View: " + $scope.filterOptions.itemsCount;
        },
        onOpenItem: function(oEntity) {
            $('#modal-Customer').off('shown.bs.modal').on('shown.bs.modal', function(e) {
                $scope.$apply(function() {
                    //on show modal
                    $scope.$broadcast('load_customer_form', oEntity);
                    $('#modal-Customer').find('input').filter(':input:visible:first').focus();
                });
            }).off('hidden.bs.modal').on('hidden.bs.modal', function(e) {
                $scope.$apply(function() {
                    //on hide modal'
                    $scope.$broadcast('unload_customer_form');
                    listCtrl.load();
                });
            }).modal('show');
        },
        filters: []
    });

    listCtrl.load();

});
