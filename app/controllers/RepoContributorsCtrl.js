'use strict';

angular.module('app.controllers').controller('RepoContributorsCtrl', function (GithubRepo, $routeParams) {
    var vm = this;
    vm.owner = $routeParams.owner;
    vm.repo = $routeParams.repo;

    var repo = new GithubRepo({repo: vm.repo, owner: vm.owner});

    this.load = function () {
        repo.query(function (items) {
            vm.repoContributors = items;
        });
    };
    this.load();
});

