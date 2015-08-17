angular.module('swarmtrace.controllers', [])

.controller('ReportNewController', function($scope, $log, $timeout, $ionicLoading, Camera, ThumbnailService) {

  $scope.report = {
    geoposition: null,
    feats: [],
    description: [],
    pictures: []
  }

  $log.log('New Report Controller');

  $scope.mapCreated = function(map) {

    $scope.map = map;

    $scope.centerMap();

  };

  $scope.centerMap = function(){

    if (!$scope.map) {
      return;
    }

    $log.log("Centering");

    $scope.loading = $ionicLoading.show({
      content: 'Obteniendo ubicación actual...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      $scope.report.geoposition = pos;
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });

  }

  $scope.takePicture = function(){
    Camera.getPicture().then(function(imageURI) {

      $log.log(imageURI);

      $log.log($scope.report);

      var theThumb = ThumbnailService.generate(imageURI);
      theThumb.then(function(data){
        $log.log(data);
        $scope.report.pictures.push({
          url:imageURI,
          thumb: data,
        });
      });

    }, function(err) {
      $log.log(err);
    });
  }

});
