(function() {
    'use strict';

    angular
        .module('Oftapp', [])
        .controller('OftappController', OftappController);

    OftappController.$inject = ['$scope', '$http'];

    function OftappController($scope, $http) {

        $scope.submit = submit;
        $scope.error_email = false;
        $scope.error_name = false;
        $scope.error_message = false;

        $scope.$watch('email', function (val){
            if($scope.email){
                $scope.error_email = false;
            }
        });

        $scope.$watch('name', function (val){
            if($scope.name){
                $scope.error_name = false;
            }
        });

        $scope.$watch('message', function (val){
            if($scope.message){
                $scope.error_message = false;
            }
        });

        function submit(){
            if(!$scope.email){
                $scope.error_email = true;
            }

            if(!$scope.name){
                $scope.error_name = true;
            }

            if(!$scope.message){
                $scope.error_message = true;
            }

            if(!$scope.email || !$scope.name || !$scope.message){
                return false;
            }

            $http({
                method: 'POST',
                url: 'http://www.oftapp.com.br/api/v1/email',
                data: {
                    name: $scope.email,
                    email: $scope.name,
                    message: $scope.message
                }
            }).
            success(function(data, status) {
                console.log(data);
            }).
            error(function(data, status) {
                console.log(data);
            });
        }

    }

})();