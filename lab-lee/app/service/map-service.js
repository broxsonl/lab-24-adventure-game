'use strict';

const angular = require('angular');
const pirateAdventure = angular.module('pirateAdventure');

pirateAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    areaA: {
      desc: '',
      north: null,
      east: 'areaB',
      south: 'areaC',
      west: null,
    },
    areaB: {
      desc: '',
      north: null,
      east: 'areaD',
      south: null,
      west: 'areaA',
    },
    areaC: {
      desc: '',
      north: 'areaA',
      east: null,
      south: 'areaF',
      west: null,
    },
    areaD: {
      desc: '',
      north: null,
      east: null,
      south: 'areaH',
      west: 'areaB',
    },
    areaE: {
      desc: '',
      north: null,
      east: 'areaF',
      south: null,
      west: 'areaA',
    },
    areaF: {
      desc: '',
      north: 'areaC',
      east: 'areaG',
      south: null,
      west: 'areaE',
    },
    areaG: {
      desc: '',
      north: null,
      east: 'areaI',
      south: null,
      west: 'areaF',
    },
    areaH: {
      desc: '',
      north: 'areaD',
      east: null,
      south: 'areaI',
      west: null,
    },
    areaI: {
      desc: '',
      north: 'areaH',
      east: null,
      south: null,
      west: 'areaG',
    },

  };
  return service;
}
