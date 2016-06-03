
(function () {
 'use strict';
    angular
        .module('Notes')
        .factory('ServicePersonnes',ServicePersonnes);
    
   ServicePersonnes.$inject = ['$resource','$rootScope'];

    function ServicePersonnes($resource, $rootScope) {

        return {
            getPersonne : getPersonne,
            getPersonnes : getPersonnes,
            updatePersonne : updatePersonne,
            createPersonne : createPersonne,
            removePersonne : removePersonne
        };

        function  getPersonnes() {
            return $resource("http:///localhost:8008/api/personnes/").query();
        }

        function getPersonne(lienPersonne) {
            return $resource(lienPersonne).get();
        }

        function updatePersonne(personne) {
            $resource('http:///localhost:8008/api/personnes/').save(personne);
        }

        function createPersonne(personne) {
            $resource('http:///localhost:8008/api/personnes/').save(user);
        }

        function removePersonne(personne) {
            $resource('http:///localhost:8008/api/personnes/').remove(personne);
        }
        
    }
})();
