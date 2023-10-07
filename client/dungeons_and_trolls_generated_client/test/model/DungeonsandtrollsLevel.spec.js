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
    instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
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

  describe('DungeonsandtrollsLevel', function() {
    it('should create an instance of DungeonsandtrollsLevel', function() {
      // uncomment below and update the code to test DungeonsandtrollsLevel
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be.a(DungeonsAndTrolls.DungeonsandtrollsLevel);
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

    it('should have the property horror (base name: "horror")', function() {
      // uncomment below and update the code to test the property horror
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function() {
      // uncomment below and update the code to test the property free
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

    it('should have the property objects (base name: "objects")', function() {
      // uncomment below and update the code to test the property objects
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

    it('should have the property ascii (base name: "ascii")', function() {
      // uncomment below and update the code to test the property ascii
      //var instance = new DungeonsAndTrolls.DungeonsandtrollsLevel();
      //expect(instance).to.be();
    });

  });

}));
