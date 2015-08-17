angular.module('swarmtrace.controllers', [])

.controller('ReportNewController', function($scope, $log, $timeout, $ionicLoading) {

  $log.log('New Report Controller');

  $scope.mapCreated = function(map) {
    $scope.map = map;

    console.log("Centering");
    if (!$scope.map) {
      $log.log('meh');
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });

  };

});
