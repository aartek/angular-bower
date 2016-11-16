'use strict';

angular.module('app.services', []);
angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.filters', []);
angular.module('app.resources', []);
angular.module('app', ['ngRoute', 'ngResource', 'app.directives', 'app.services', 'app.controllers',
    'app.directives', 'app.resources']);
