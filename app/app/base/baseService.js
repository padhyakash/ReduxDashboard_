angular.module('base.service', [])
    .factory('Base', function () {
        var title = 'redux';
        var baseUrl = '';
        var role = Role.admin;
        return {
            getTitle: function () {
                return title;
            },
            getBaseUrl: function () {
                return baseUrl;
            }
        }
    });