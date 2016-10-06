'use strict';

// Register `appStores` component, along with its associated controller and template
angular.
  module('appStores').
  component('appStores', {
    templateUrl: 'app-stores/app-stores.template.html',
    controller: function AppStoresController($location, $window) {

        var appid = $location.search().id;

        this.stores = [
          {
            name: 'Google Play Store',
            url: 'https://play.google.com/store/apps/details?id=' + appid,
            img: 'img/Google_Play_Store.png'
          }, {
            name: 'Amazon App Store',
            url: 'https://play.google.com/store/apps/details?id=' + appid,
            img: 'img/amazon_app_store.png'
          }, {
            name: 'Samsung App Store',
            url: 'https://play.google.com/store/apps/details?id=' + appid,
            img: 'img/samsung_app_store.png'
          }, {
            name: 'SlideMe App Store',
            url: 'https://play.google.com/store/apps/details?id=' + appid,
            img: 'img/slideme_app_store.png'
          }
        ];

        this.goToPage = function(url) {
            $window.location.href = url;
        };
      }
  });