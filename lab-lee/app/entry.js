'use strict';

require('./scss/main.scss');
// webpack assets

// npm modules
// require in angular
const angular = require('angular');
// require in angular modules
// create our angular modules
angular.module('pirateAdventure', []);

// services
require('./service/map-service.js');
require('./service/player-service.js');

// components
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
