/**
 * Dungeons and Trolls
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DungeonsAndTrolls);
  }
}(this, function(expect, DungeonsAndTrolls) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DungeonsAndTrollsApi', function() {
    describe('dungeonsAndTrollsAssignSkillPoints', function() {
      it('should call dungeonsAndTrollsAssignSkillPoints successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsAssignSkillPoints
        //instance.dungeonsAndTrollsAssignSkillPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsBuy', function() {
      it('should call dungeonsAndTrollsBuy successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsBuy
        //instance.dungeonsAndTrollsBuy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsCommands', function() {
      it('should call dungeonsAndTrollsCommands successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsCommands
        //instance.dungeonsAndTrollsCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsGame', function() {
      it('should call dungeonsAndTrollsGame successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsGame
        //instance.dungeonsAndTrollsGame(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsGameLevel', function() {
      it('should call dungeonsAndTrollsGameLevel successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsGameLevel
        //instance.dungeonsAndTrollsGameLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsLevels', function() {
      it('should call dungeonsAndTrollsLevels successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsLevels
        //instance.dungeonsAndTrollsLevels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsMonstersCommands', function() {
      it('should call dungeonsAndTrollsMonstersCommands successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsMonstersCommands
        //instance.dungeonsAndTrollsMonstersCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsMove', function() {
      it('should call dungeonsAndTrollsMove successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsMove
        //instance.dungeonsAndTrollsMove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsPickUp', function() {
      it('should call dungeonsAndTrollsPickUp successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsPickUp
        //instance.dungeonsAndTrollsPickUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsPlayers', function() {
      it('should call dungeonsAndTrollsPlayers successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsPlayers
        //instance.dungeonsAndTrollsPlayers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsRegister', function() {
      it('should call dungeonsAndTrollsRegister successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsRegister
        //instance.dungeonsAndTrollsRegister(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsRespawn', function() {
      it('should call dungeonsAndTrollsRespawn successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsRespawn
        //instance.dungeonsAndTrollsRespawn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsSkill', function() {
      it('should call dungeonsAndTrollsSkill successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsSkill
        //instance.dungeonsAndTrollsSkill(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dungeonsAndTrollsYell', function() {
      it('should call dungeonsAndTrollsYell successfully', function(done) {
        //uncomment below and update the code to test dungeonsAndTrollsYell
        //instance.dungeonsAndTrollsYell(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
