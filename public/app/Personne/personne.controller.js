
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('PersonneController', PersonneController);

    PersonneController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePersonnes'];

    function PersonneController($scope, $location ,$http, $rootScope, ngDialog,ServicePersonnes) {

        $scope.personnes =  [];
        
        ServicePersonnes.getPersonnes().$promise.then(function (liensPersonnes) {
            for  (var indiceLien in liensPersonnes){

                var lienPersonne = liensPersonnes[indiceLien];

                 // Je vérifie que la ligne de resultat est bien un lien en string et non pas un true ou un $promise{..}
                 if(typeof lienPersonne == 'string'){

                    ServicePersonnes.getPersonne(lienPersonne).$promise.then(function (personne) {
                        $scope.personnes.push(personne);
                    });
                 }
            }
        });

        $scope.mdr = " mdrrrrrrrr";

    }

})();


