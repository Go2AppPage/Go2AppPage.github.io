'use strict';

// Register `appStores` component, along with its associated controller and template
angular.
  module('customHeader').
  component('customHeader', {
    templateUrl: 'custom-header/custom-header.template.html',
    controller: function CustomHeaderController($location) {

        this.appname = $location.search().name;
        this.custtype = $location.search().custtype;

      }
  });