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
    instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
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

  describe('DungeonsandtrollsCharacter', function() {
    it('should create an instance of DungeonsandtrollsCharacter', function() {
      // uncomment below and update the code to test DungeonsandtrollsCharacter
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be.a(DungeonsAndTrolls.DungeonsandtrollsCharacter);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property money (base name: "money")', function() {
      // uncomment below and update the code to test the property money
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property equip (base name: "equip")', function() {
      // uncomment below and update the code to test the property equip
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property skillPoints (base name: "skillPoints")', function() {
      // uncomment below and update the code to test the property skillPoints
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property effects (base name: "effects")', function() {
      // uncomment below and update the code to test the property effects
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property maxAttributes (base name: "maxAttributes")', function() {
      // uncomment below and update the code to test the property maxAttributes
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property lastDamageTaken (base name: "lastDamageTaken")', function() {
      // uncomment below and update the code to test the property lastDamageTaken
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property coordinates (base name: "coordinates")', function() {
      // uncomment below and update the code to test the property coordinates
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

    it('should have the property stun (base name: "stun")', function() {
      // uncomment below and update the code to test the property stun
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsCharacter();
      //expect(instance).to.be();
    });

  });

}));
