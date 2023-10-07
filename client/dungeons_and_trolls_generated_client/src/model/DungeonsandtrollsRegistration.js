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

import ApiClient from '../ApiClient';

/**
 * The DungeonsandtrollsRegistration model module.
 * @module model/DungeonsandtrollsRegistration
 * @version 1.7.0
 */
class DungeonsandtrollsRegistration {
    /**
     * Constructs a new <code>DungeonsandtrollsRegistration</code>.
     * @alias module:model/DungeonsandtrollsRegistration
     */
    constructor() { 
        
        DungeonsandtrollsRegistration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DungeonsandtrollsRegistration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DungeonsandtrollsRegistration} obj Optional instance to populate.
     * @return {module:model/DungeonsandtrollsRegistration} The populated <code>DungeonsandtrollsRegistration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DungeonsandtrollsRegistration();

            if (data.hasOwnProperty('apiKey')) {
                obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} apiKey
 */
DungeonsandtrollsRegistration.prototype['apiKey'] = undefined;






export default DungeonsandtrollsRegistration;

