'use strict';

describe('Controller: FacturaNoPagadasCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var FacturaNoPagadasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacturaNoPagadasCtrl = $controller('FacturaNoPagadasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FacturaNoPagadasCtrl.awesomeThings.length).toBe(3);
  });
});
