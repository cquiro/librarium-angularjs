angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'UserPersistence', function (Restangular, UserPersistence) {
      const urlBase = '/users';
      const usersService = {};

      usersService.addUser = function (newUser) {
        return Restangular.all(urlBase)
          .post(newUser)
          .then(function (user) {
            UserPersistence.setUserData(JSON.stringify(user));
          });
      };

      return usersService;
    }]);
