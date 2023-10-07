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
import DungeonsandtrollsCoordinates from './DungeonsandtrollsCoordinates';
import DungeonsandtrollsEventType from './DungeonsandtrollsEventType';
import DungeonsandtrollsSkill from './DungeonsandtrollsSkill';

/**
 * The DungeonsandtrollsEvent model module.
 * @module model/DungeonsandtrollsEvent
 * @version 1.7.0
 */
class DungeonsandtrollsEvent {
    /**
     * Constructs a new <code>DungeonsandtrollsEvent</code>.
     * @alias module:model/DungeonsandtrollsEvent
     */
    constructor() { 
        
        DungeonsandtrollsEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DungeonsandtrollsEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DungeonsandtrollsEvent} obj Optional instance to populate.
     * @return {module:model/DungeonsandtrollsEvent} The populated <code>DungeonsandtrollsEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DungeonsandtrollsEvent();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DungeonsandtrollsEventType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('coordinates')) {
                obj['coordinates'] = DungeonsandtrollsCoordinates.constructFromObject(data['coordinates']);
            }
            if (data.hasOwnProperty('damage')) {
                obj['damage'] = ApiClient.convertToType(data['damage'], 'Number');
            }
            if (data.hasOwnProperty('playerId')) {
                obj['playerId'] = ApiClient.convertToType(data['playerId'], 'String');
            }
            if (data.hasOwnProperty('skillName')) {
                obj['skillName'] = ApiClient.convertToType(data['skillName'], 'String');
            }
            if (data.hasOwnProperty('radius')) {
                obj['radius'] = ApiClient.convertToType(data['radius'], 'Number');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = DungeonsandtrollsCoordinates.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('skill')) {
                obj['skill'] = DungeonsandtrollsSkill.constructFromObject(data['skill']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
DungeonsandtrollsEvent.prototype['message'] = undefined;

/**
 * @member {module:model/DungeonsandtrollsEventType} type
 */
DungeonsandtrollsEvent.prototype['type'] = undefined;

/**
 * @member {module:model/DungeonsandtrollsCoordinates} coordinates
 */
DungeonsandtrollsEvent.prototype['coordinates'] = undefined;

/**
 * @member {Number} damage
 */
DungeonsandtrollsEvent.prototype['damage'] = undefined;

/**
 * @member {String} playerId
 */
DungeonsandtrollsEvent.prototype['playerId'] = undefined;

/**
 * @member {String} skillName
 */
DungeonsandtrollsEvent.prototype['skillName'] = undefined;

/**
 * @member {Number} radius
 */
DungeonsandtrollsEvent.prototype['radius'] = undefined;

/**
 * @member {module:model/DungeonsandtrollsCoordinates} target
 */
DungeonsandtrollsEvent.prototype['target'] = undefined;

/**
 * @member {module:model/DungeonsandtrollsSkill} skill
 */
DungeonsandtrollsEvent.prototype['skill'] = undefined;






export default DungeonsandtrollsEvent;

