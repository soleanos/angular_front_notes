

(function () {
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
        
        function getPersonne (id) {
            return $resource("http:///localhost:8008/api/personnes/"+id).query();
        }
        
        function getPersonnes () {

           var result = {}

           firstQuery = $resource("http://localhost:8008/api/personnes/").query();

           firstQuery.$promise.then(function (liensPersonnes) {

               for  (var indiceLien in liensPersonnes){

                    lienPersonne = liensPersonnes[indiceLien];

                    if(typeof lienPersonne == 'string'){
                        secondQuery = $resource(lienPersonne).get();
                        secondQuery.$promise.then(function (personne) {
                           result.push(personne);
                           console.log(personne)
                        });
                    }

               }
                console.log(result)
            });

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
