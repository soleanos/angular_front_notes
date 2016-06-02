
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePersonnes'];

    function HomeController($scope, $location ,$http, $rootScope, ngDialog,ServicePersonnes) {

        $scope.personnes =  [];
        
        ServicePersonnes.getPersonnes().$promise.then(function (liensPersonnes) {
            for  (var indiceLien in liensPersonnes){

                var lienPersonne = liensPersonnes[indiceLien];

                 if(typeof lienPersonne == 'string'){

                    ServicePersonnes.getPersonne(lienPersonne).$promise.then(function (personne) {
                        $scope.personnes.push(personne);
                    });
                 }

            }
        });

    }

})();


