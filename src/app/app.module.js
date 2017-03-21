angular.module(
  'librarium', [
    'ui.router',
    'restangular',
    'pascalprecht.translate',
    'permission',
    'permission.ui',
    'librarium.directives'
  ]
);

angular.module('librarium').config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
});
