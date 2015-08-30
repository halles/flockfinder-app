// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mmera', [
    'ionic',
    'satellizer',
    'mmera.controllers',
    'mmera.directives',
    'mmera.factories',
    'ui.thumbnail',
    'ngCordova'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('reports', {
        url: '/',
        controller: 'ReportNewController',
        templateUrl: 'app/modules/reports/new.html'
    })

})

.config(function(ThumbnailServiceProvider) {
    // otherwise they're 100
    ThumbnailServiceProvider.defaults.width = 160;
    ThumbnailServiceProvider.defaults.height = 160;
})

.config(function ($ionicConfigProvider) {

    // Enable native scrolls for Android platform only,
    // as you see, we're disabling jsScrolling to achieve this.
    if (ionic.Platform.isAndroid()) {
      $ionicConfigProvider.scrolling.jsScrolling(false);
    }

});
