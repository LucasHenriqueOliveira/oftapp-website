(function() {
    'use strict';

    angular
        .module('Oftapp', [])
        .controller('OftappController', OftappController);

    OftappController.$inject = ['$scope'];

    function OftappController($scope) {
        $scope.submit = submit;

        function submit(){
            console.log($scope.email);
        }

    }

})();