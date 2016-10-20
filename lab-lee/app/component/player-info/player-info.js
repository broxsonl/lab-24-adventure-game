'use strict';

require('./_player-info.scss');

const angular = require('angular');
const pirateAdventure = angular.module('pirateAdventure');

pirateAdventure.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl',
});

pirateAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  this.player = playerService.player;
}
