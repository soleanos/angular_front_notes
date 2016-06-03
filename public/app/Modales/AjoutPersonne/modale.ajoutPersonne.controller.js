(function () {
    'use strict';

    angular
        .module('Trombi')
        .controller('modaleAjoutPersonneController', modaleAjoutPersonneController);

     modaleAjoutPersonneController.$inject = ['$scope', '$route', '$rootScope'];


     function modaleAjoutPersonneController($scope, $route, $rootScope) {
//
//        $scope.initModalUpdate = function(){
//                TrombiUsers.getUsers().$promise.then(function(result) {
//                     $scope.usersAdmin = result;
//                     $scope.unUser = $scope.usersAdmin[$rootScope.indexGlobal]
//                     $scope.unUser.fullLinkPicture = 'http://127.0.0.1:3000/api/users/'+$scope.unUser.matricule+'/picture';
//                });
//        };
//
//         $scope.RemoveUser = function(unUser) {
//             TrombiUsers.removeUser(unUser);
//             $rootScope.dialog.close();
//         };


    }
})();
