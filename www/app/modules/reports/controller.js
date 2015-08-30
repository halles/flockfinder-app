angular.module('mmera.controllers', [])

.controller('ReportNewController', function($scope, $log, $timeout, $ionicLoading, $ionicPlatform, Camera, ThumbnailService, $cordovaGeolocation) {

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

  var geoMarker = null;

  $scope.centerMap = function(){

    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Obteniendo ubicación actual...',
      showBackdrop: false
    });

    $ionicPlatform.ready(function() {

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(pos){
                $scope.report.geoposition = pos;
                console.log('Got pos', pos);
                latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.map.setCenter(latlng);
                if(geoMarker!=null){
                    geoMarker.setMap(null);
                }
                geoMarker = new google.maps.Marker({
                    position: latlng,
                    map: $scope.map,
                    title: 'My Position',
                    icon: 'img/current-location-icon.png'
                });
                $ionicLoading.hide();
            });

    });

  }

  $scope.takePicture = function(){

    var options = {
        quality : 75,
        targetWidth: 600,
        targetHeight: 600
    };

    Camera.getPicture(options).then(function(imageURI) {

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
