
(function () {
    'use strict';

    angular
        .module('Notes')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location', '$http', '$rootScope', 'ngDialog','ServicePersonnes'];

    function HomeController($scope, $location ,$http, $rootScope, ngDialog,ServicePersonnes) {

        $scope.personnes = {};
        
        ServicePersonnes.getPersonnes();
//            $scope.personnes = result;
//               for  (var pers in result){
//                    console.log(result[pers])
//               }
//                console.log(result)
//        });
		
		$scope.lol = " hey, ceci est un test";
    }

})();


