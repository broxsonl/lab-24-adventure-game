'use strict';

describe('testing gamePadCtrl', function() {

  beforeEach( () => {
    angular.mock.module('pirateAdventure');
    angular.mock.inject( $controller => {
      this.gamePadCtrl = new $controller('GamePadController');
    });
  });

  describe('testing initial properties', () => {

    it('should be an array', () => {
      expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
    });

    it('should be an array with length of 4', () => {
      expect(this.gamePadCtrl.directions.length).toEqual(4);
    });

    it('should default at north', () => {
      expect(this.gamePadCtrl.moveDirection).toBe('north');
    });

  });

  describe('testing #movePlayer', () => {
    it('should be north when running default ', () => {
      this.gamePadCtrl.movePlayer();
      let expectedResult = this.gamePadCtrl.moveDirection;
      expect(expectedResult).toBe('north');
    });
  });
});
