'use strict';

require('./_game-history.scss');
const angular = require('angular');
const pirateAdventure = angular.module('pirateAdventure');

pirateAdventure.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controlerAs: 'gameHistoryCtrl',
});

pirateAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('init gameHistoryCtrl');
  this.history = playerService.history;
}
