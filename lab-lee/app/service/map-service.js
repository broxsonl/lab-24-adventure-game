'use strict';

const angular = require('angular');
const pirateAdventure = angular.module('pirateAdventure');

pirateAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    areaA: {
      desc: 'You look around at your home harbor. It\'s a beautiful, sunny day. Head off to the east, or the south?',
      north: null,
      east: 'areaB',
      south: 'areaC',
      west: null,
    },
    areaB: {
      desc: 'There is a storm comin\'! Batton down the hatches, and other pirate-y stuff! Head east or west!',
      north: null,
      east: 'areaD',
      south: null,
      west: 'areaA',
    },
    areaC: {
      desc: 'Not good luck. There is no wind today! You will have to wait it out...but just then, you see another ship to the south. Paddle over that way, or head back north!',
      north: 'areaA',
      east: null,
      south: 'areaF',
      west: null,
    },
    areaD: {
      desc: 'The storm has subsided, and everything is a-arrrr-kay! Looks to be you can head south or west!',
      north: null,
      east: null,
      south: 'areaH',
      west: 'areaB',
    },
    areaE: {
      desc: 'It\'s a kraken! Fightin\' it just ain\'t an option! Get goin\' east or go west to steer into the beast!',
      north: null,
      east: 'areaF',
      south: null,
      west: 'areaA',
    },
    areaF: {
      desc: 'You come to a derelict ship, but there is no one onboard. You hop aboard and loot it. Increase your booty by 5! Head on north, east or west.',
      north: 'areaC',
      east: 'areaG',
      south: null,
      west: 'areaE',
    },
    areaG: {
      desc: 'You can feel the treasure close now. You know it\'s nearby! Sail back west, or head on east to the possible booty!' ,
      north: null,
      east: 'areaI',
      south: null,
      west: 'areaF',
    },
    areaH: {
      desc: 'There\'s a strange feeling coming from the south. It could be a bad omen, but it could be treasure! Head south, or back north?',
      north: 'areaD',
      east: null,
      south: 'areaI',
      west: null,
    },
    areaI: {
      desc: 'It\'s the treasure! You\'ve found it, and you and your mteys are going to be very rich now. Head out of here either north or west.',
      north: 'areaH',
      east: null,
      south: null,
      west: 'areaG',
    },

  };
  return service;
}
