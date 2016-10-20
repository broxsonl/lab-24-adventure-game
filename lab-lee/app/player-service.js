'use strict';

const angular = require('angular');
const pirateAdventure = angular.module('pirateAdventure');

pirateAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('init playerService');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Blackbeard',
    location: 'Your ship. Arr',
    booty: 20,
  };
  let history = service.history = [{
    turn: 0,
    desc: 'Welcome to the high seas, matey!',
    booty: player.booty,
  },
];

  service.movePlayer = function(choice) {
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][choice];
      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'That\'s walkin\' the plank. Try somethin\' else!',
          location: player.location,
          booty: player.booty,
        });
        console.log('history', history);
        return reject('Bad choice');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        booty: player.booty,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}
