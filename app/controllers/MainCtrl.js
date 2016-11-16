'use strict';

angular.module('app.controllers').controller('MainCtrl', function (GithubUserRepos) {
    var vm = this;
    vm.availableSortOptions = [
        {value: 'full_name', label: 'Full name'},
        {value: 'created', label: 'Created'},
        {value: 'updated', label: 'Updated'},
        {value: 'pushed', label: 'Pushed'}
    ];
    vm.username = 'hybris';
    vm.sort = 'full_name';

    var githubUserRepo = new GithubUserRepos();

    this.load = function () {
        githubUserRepo.query({username: vm.username, sort: vm.sort}, function (items) {
            vm.repos = items;
        });
    };
    this.load();
});

