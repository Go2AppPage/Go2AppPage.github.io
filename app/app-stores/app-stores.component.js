'use strict';

// Register `appStores` component, along with its associated controller and template
angular.
  module('appStores').
  component('appStores', {
    templateUrl: 'app-stores/app-stores.template.html',
    controller: function AppStoresController() {
        this.stores = [
          {
            name: 'Google Play Store',
            snippet: 'Google Play Store'
          }, {
            name: 'Amazon App Store',
            snippet: 'Amazon App Store'
          }, {
            name: 'Samsung App Store',
            snippet: 'Samsung App Store'
          }
        ];
      }
  });