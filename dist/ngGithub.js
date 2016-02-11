/**
 * GitHub API wrapper for AngularJS
 * @version v0.0.1 - 2016-02-11
 * @link https://github.com/mglaman/ngGithub
 * @author Matt Glaman <nmd.matt@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
  'use strict';
  angular.module('ngGithub', ['ngResource']).provider('GitHub', function GitHub() {
    var provider = this;
    this.defaults = {
      aptToken: '',
      apiUrl: 'https://api.github.com'
    };
    this.generateRoute = function (method, endpoint) {
      var config = {
          method: method,
          url: provider.defaults.apiUrl + endpoint,
          isArray: true,
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        };
      if (provider.defaults.apiToken.length > 0) {
        config.headers.Authorization = provider.defaults.apiToken;
      }
      return config;
    };
    this.$get = function () {
      var self = this;
      // Public API here
      return {
        getUser: function () {
          return $resource(resourceUrl, {}, { orgs: provider.generateRoute('GET', '/user/orgs') });
        },
        getOrg: function (login) {
          return $resource(resourceUrl, { orgName: login }, {
            events: provider.generateRoute('GET', '/orgs/:orgName/events'),
            repos: provider.generateRoute('GET', '/orgs/:orgName/repos'),
            issues: provider.generateRoute('GET', '/orgs/:orgName/issues')
          });
        },
        getRepo: function (owner, repo) {
          return $resource(resourceUrl, {
            owner: owner,
            repo: repo
          }, { milestones: provider.generateRoute('GET', '/repos/:owner/:repo/milestones') });
        }
      };
    };
  });
}());