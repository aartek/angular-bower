'use strict';

angular.module('app.resources').factory('GithubRepo', function ($resource) {
    return function (params) {
        return $resource('https://api.github.com/repos/:owner/:repo/contributors', params);
    };
});