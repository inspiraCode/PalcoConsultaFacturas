'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:FacturaNoPagadasCtrl
 * @description
 * # FacturaNoPagadasCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('FacturaNoPagadasCtrl', function($scope) {
    $scope.Discharges = [{
        Folio: "85600",
        DateDischarge: new Date(),
        ClavePed: 'IN',
        NumPed: '170734297006644',
        FolioFiscal: 'e0cef6c8-dd2c-4b29-a374-4d806bbf5a5d',
        Saldo: 569,
        Expenses: [{
            DateExecuted: new Date(),
            Concept: 'Pago de Guardias',
            Reference: '3456787645',
            Amount: 1234.45,
            UserResponsable: 'Contador'
        }, {
            DateExecuted: new Date(),
            Concept: 'Pago de CFE',
            Reference: '9876543345',
            Amount: 65462.23,
            UserResponsable: 'Alfredo Pacheco'
        }]
    }, {
        Folio: 1234.34,
        DateDischarge: new Date(),
        UserResponsable: 'Maestra Flor',
        Expenses: [{
            DateExecuted: new Date(),
            Concept: 'Pago de Guardias',
            Reference: '3456787645',
            Amount: 1234.45,
            UserResponsable: 'Contador'
        }, {
            DateExecuted: new Date(),
            Concept: 'Pago de CFE',
            Reference: '9876543345',
            Amount: 65462.23,
            UserResponsable: 'Alfredo Pacheco'
        }]
    }];
});
