'use strict';

angular.module('app.resources').factory('GithubUserRepos', function ($resource) {
    return function () {
        return $resource('https://api.github.com/users/:username/repos')
    };
});