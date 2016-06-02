/**
 * Created by aarchamb on 12/04/2016.
 */

(function () {

    'use strict';

    angular
        .module('Notes', [
            'ngRoute',
            'ngMessages',
            'ngResource',
            'ngDialog',
            'ngMaterial',
            'ngMdIcons'
        ])
        .config(config)

    config.$inject = ['$routeProvider','$compileProvider'];

    function config($routeProvider,$compileProvider) {
        $routeProvider.otherwise({
//            redirectTo: '/home'
        });
    }
})();

