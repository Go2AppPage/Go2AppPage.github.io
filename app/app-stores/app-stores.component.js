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
            img: 'img/Google_Play_Store.png'
          }, {
            name: 'Amazon App Store',
            img: 'img/amazon_app_store.png'
          }, {
            name: 'Samsung App Store',
            img: 'img/samsung_app_store.png'
          }, {
            name: 'SlideMe App Store',
            img: 'img/slideme_app_store.png'
          }
        ];
      }
  });