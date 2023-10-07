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
    instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
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

  describe('DungeonsandtrollsEvent', function() {
    it('should create an instance of DungeonsandtrollsEvent', function() {
      // uncomment below and update the code to test DungeonsandtrollsEvent
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be.a(DungeonsAndTrolls.DungeonsandtrollsEvent);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property coordinates (base name: "coordinates")', function() {
      // uncomment below and update the code to test the property coordinates
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property damage (base name: "damage")', function() {
      // uncomment below and update the code to test the property damage
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property playerId (base name: "playerId")', function() {
      // uncomment below and update the code to test the property playerId
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property skillName (base name: "skillName")', function() {
      // uncomment below and update the code to test the property skillName
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property radius (base name: "radius")', function() {
      // uncomment below and update the code to test the property radius
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

    it('should have the property skill (base name: "skill")', function() {
      // uncomment below and update the code to test the property skill
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsEvent();
      //expect(instance).to.be();
    });

  });

}));
