'use strict';

describe('testing playerInfoCtrl', function() {

  beforeEach(() => {
    angular.mock.module('pirateAdventure');
    angular.mock.inject( $controller => {
      this.playerInfoCtrl = new $controller('PlayerInfoController');
    });
  });

  describe('testing initial properties', () => {

    it('should have the correct properties from player-service', () => {
      let expectedResult = {
        name: 'Blackbeard',
        location: 'areaA',
        booty: 20,
      };
      expect(this.playerInfoCtrl.player.name).toBe(expectedResult.name);
      expect(this.playerInfoCtrl.player.location).toBe(expectedResult.location);
      expect(this.playerInfoCtrl.player.booty).toBe(expectedResult.booty);
    });

  });
});
