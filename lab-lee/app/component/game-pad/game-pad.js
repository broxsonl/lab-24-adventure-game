'use strict';

require('./_game-pad.scss');

const angular = require('angular');
const pirateAdventure = angular.module('pirateAdventure');

pirateAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

pirateAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('init gamePadCtrl');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.log(`Player at new location: ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
