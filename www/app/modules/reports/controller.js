angular.module('swarmtrace.controllers', [])

.controller('ReportNewController', function($scope, $log, $timeout, $ionicLoading) {

  $log.log('New Report Controller');

  $scope.mapCreated = function(map) {

    $scope.map = map;

    $scope.centerMap();

  };

  $scope.centerMap = function(){

    if (!$scope.map) {
      return;
    }

    console.log("Centering");

    $scope.loading = $ionicLoading.show({
      content: 'Obteniendo ubicación actual...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });

  }

});
