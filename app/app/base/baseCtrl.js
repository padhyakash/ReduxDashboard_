angular.module('base.ctrl', [])
    .controller('baseCtrl', function ($scope, Base, $state) {

        //default details..
        Base.setTitle("Redux X-Press Dashboard");
        $scope.pageTitle = Base.getTitle();
    });