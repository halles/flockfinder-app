// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('mmera.directives', []);
angular.module('mmera.factories', []);

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
    .state('home', {
        url: '/',
        controller: 'homeController',
        templateUrl: 'app/modules/home/home.html'
    })
    .state('account', {
        url: '/account',
        controller: 'accountController',
        templateUrl: 'app/modules/account/account.html'
    })
    .state('account.new', {
        url: '/new',
        controller: 'accountNewController',
        templateUrl: 'app/modules/account/new.html'
    })
    .state('account.recover', {
        url: '/recover',
        controller: 'accountRecoverController',
        templateUrl: 'app/modules/account/recover.html'
    })
    .state('account.login', {
        url: '/login',
        controller: 'accountLoginController',
        templateUrl: 'app/modules/account/login.html'
    })
    .state('reports', {
        url: '/reports',
        controller: 'reportsController',
        templateUrl: 'app/modules/reports/reports.html'
    })
    .state('reports.new', {
        url: '/new',
        controller: 'reportsNewController',
        templateUrl: 'app/modules/reports/newReport.html'
    })
    .state('reports.new.dog', {
        url: '/dog',
        controller: 'reportstNewDogController',
        templateUrl: 'app/modules/reports/newReportDog.html'
    })
    .state('reports.new.cat', {
        url: '/cat',
        controller: 'reportsNewCatController',
        templateUrl: 'app/modules/reports/newReportCat.html'
    })
    .state('about', {
        url: '/about',
        controller: 'aboutController',
        templateUrl: 'app/modules/about/about.html'
    })
    .state('about.tos', {
        url: '/tos',
        templateUrl: 'app/modules/about/tos.html'
    })
    .state('about.privacy-policy', {
        url: '/privacy-policy',
        templateUrl: 'app/modules/about/privacy-policy.html'
    });

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
