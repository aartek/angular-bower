'use strict';

angular.module('app').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
    });
    $routeProvider.when('/repo/:owner/:repo', {
        templateUrl: 'views/contributors/repoContributorsView.html',
        controller: 'RepoContributorsCtrl',
        controllerAs: 'repoContribCtrl'
    });

    $routeProvider.otherwise('/');
});