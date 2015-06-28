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
                url: 'http://localhost:8000/api/v1/email',
                data: {
                    name: $scope.email,
                    email: $scope.name,
                    message: $scope.message
                }
            })
                .then(function(response) {

                    console.log(response);

                }, function(error) {

                    console.log(error);

                });
        }

    }

})();