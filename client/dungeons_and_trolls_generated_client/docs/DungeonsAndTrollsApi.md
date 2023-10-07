# DungeonsAndTrolls.DungeonsAndTrollsApi

All URIs are relative to *https://dt.garage-trip.cz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dungeonsAndTrollsAssignSkillPoints**](DungeonsAndTrollsApi.md#dungeonsAndTrollsAssignSkillPoints) | **POST** /v1/assign-skill-points | Send multiple commands to the Character bound to the logged user. The order of execution is defined in the message.
[**dungeonsAndTrollsBuy**](DungeonsAndTrollsApi.md#dungeonsAndTrollsBuy) | **POST** /v1/buy | Buy Items identified by the provided ID for the Character bound to the logged user.
[**dungeonsAndTrollsCommands**](DungeonsAndTrollsApi.md#dungeonsAndTrollsCommands) | **POST** /v1/commands | Send multiple commands to the Character bound to the logged user. The order of execution is defined in the message.
[**dungeonsAndTrollsGame**](DungeonsAndTrollsApi.md#dungeonsAndTrollsGame) | **GET** /v1/game | Sends all info about the game.
[**dungeonsAndTrollsGameLevel**](DungeonsAndTrollsApi.md#dungeonsAndTrollsGameLevel) | **GET** /v1/game/{level} | Sends all info about the game level.
[**dungeonsAndTrollsLevels**](DungeonsAndTrollsApi.md#dungeonsAndTrollsLevels) | **GET** /v1/levels | Sends info about
[**dungeonsAndTrollsMonstersCommands**](DungeonsAndTrollsApi.md#dungeonsAndTrollsMonstersCommands) | **POST** /v1/monsters-commands | Control monsters. Admin only.
[**dungeonsAndTrollsMove**](DungeonsAndTrollsApi.md#dungeonsAndTrollsMove) | **POST** /v1/move | Assign skill point to the attribute for the Character bound to the logged user.
[**dungeonsAndTrollsPickUp**](DungeonsAndTrollsApi.md#dungeonsAndTrollsPickUp) | **POST** /v1/pick-up | Equip the Item from the ground identified by the provided ID for the Character bound to the logged user (unused).
[**dungeonsAndTrollsPlayers**](DungeonsAndTrollsApi.md#dungeonsAndTrollsPlayers) | **GET** /v1/players | Sends all info about all players.
[**dungeonsAndTrollsRegister**](DungeonsAndTrollsApi.md#dungeonsAndTrollsRegister) | **POST** /v1/register | Register provided User to the Game and create a character.
[**dungeonsAndTrollsRespawn**](DungeonsAndTrollsApi.md#dungeonsAndTrollsRespawn) | **POST** /v1/respawn | Respawn the Character bound to the logged user.
[**dungeonsAndTrollsSkill**](DungeonsAndTrollsApi.md#dungeonsAndTrollsSkill) | **POST** /v1/skill | Use a skill (provided by an item) by the Character bound to the logged user.
[**dungeonsAndTrollsYell**](DungeonsAndTrollsApi.md#dungeonsAndTrollsYell) | **POST** /v1/yell | The Character bound to the logged user yells a messages (visible for everyone).



## dungeonsAndTrollsAssignSkillPoints

> Object dungeonsAndTrollsAssignSkillPoints(attributes, opts)

Send multiple commands to the Character bound to the logged user. The order of execution is defined in the message.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let attributes = new DungeonsAndTrolls.DungeonsandtrollsAttributes(); // DungeonsandtrollsAttributes | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsAssignSkillPoints(attributes, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes** | [**DungeonsandtrollsAttributes**](DungeonsandtrollsAttributes.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsBuy

> Object dungeonsAndTrollsBuy(identifiers, opts)

Buy Items identified by the provided ID for the Character bound to the logged user.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let identifiers = new DungeonsAndTrolls.DungeonsandtrollsIdentifiers(); // DungeonsandtrollsIdentifiers | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsBuy(identifiers, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifiers** | [**DungeonsandtrollsIdentifiers**](DungeonsandtrollsIdentifiers.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsCommands

> Object dungeonsAndTrollsCommands(commandsBatch, opts)

Send multiple commands to the Character bound to the logged user. The order of execution is defined in the message.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let commandsBatch = new DungeonsAndTrolls.DungeonsandtrollsCommandsBatch(); // DungeonsandtrollsCommandsBatch | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsCommands(commandsBatch, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commandsBatch** | [**DungeonsandtrollsCommandsBatch**](DungeonsandtrollsCommandsBatch.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsGame

> DungeonsandtrollsGameState dungeonsAndTrollsGame(opts)

Sends all info about the game.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let opts = {
  'blocking': true, // Boolean | default false
  'items': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsGame(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blocking** | **Boolean**| default false | [optional] 
 **items** | **Boolean**| default true | [optional] 

### Return type

[**DungeonsandtrollsGameState**](DungeonsandtrollsGameState.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dungeonsAndTrollsGameLevel

> DungeonsandtrollsGameState dungeonsAndTrollsGameLevel(level, opts)

Sends all info about the game level.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let level = 56; // Number | 
let opts = {
  'blocking': true, // Boolean | default false
  'items': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsGameLevel(level, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **level** | **Number**|  | 
 **blocking** | **Boolean**| default false | [optional] 
 **items** | **Boolean**| default true | [optional] 

### Return type

[**DungeonsandtrollsGameState**](DungeonsandtrollsGameState.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dungeonsAndTrollsLevels

> DungeonsandtrollsAvailableLevels dungeonsAndTrollsLevels(opts)

Sends info about

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let opts = {
  'blocking': true // Boolean | default false
};
apiInstance.dungeonsAndTrollsLevels(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blocking** | **Boolean**| default false | [optional] 

### Return type

[**DungeonsandtrollsAvailableLevels**](DungeonsandtrollsAvailableLevels.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dungeonsAndTrollsMonstersCommands

> Object dungeonsAndTrollsMonstersCommands(commandsForMonsters, opts)

Control monsters. Admin only.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let commandsForMonsters = new DungeonsAndTrolls.DungeonsandtrollsCommandsForMonsters(); // DungeonsandtrollsCommandsForMonsters | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsMonstersCommands(commandsForMonsters, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commandsForMonsters** | [**DungeonsandtrollsCommandsForMonsters**](DungeonsandtrollsCommandsForMonsters.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsMove

> Object dungeonsAndTrollsMove(position, opts)

Assign skill point to the attribute for the Character bound to the logged user.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let position = new DungeonsAndTrolls.DungeonsandtrollsPosition(); // DungeonsandtrollsPosition | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsMove(position, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **position** | [**DungeonsandtrollsPosition**](DungeonsandtrollsPosition.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsPickUp

> Object dungeonsAndTrollsPickUp(identifier, opts)

Equip the Item from the ground identified by the provided ID for the Character bound to the logged user (unused).

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let identifier = new DungeonsAndTrolls.DungeonsandtrollsIdentifier(); // DungeonsandtrollsIdentifier | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsPickUp(identifier, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | [**DungeonsandtrollsIdentifier**](DungeonsandtrollsIdentifier.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsPlayers

> DungeonsandtrollsPlayersInfo dungeonsAndTrollsPlayers(opts)

Sends all info about all players.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let opts = {
  'blocking': true // Boolean | default false
};
apiInstance.dungeonsAndTrollsPlayers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blocking** | **Boolean**| default false | [optional] 

### Return type

[**DungeonsandtrollsPlayersInfo**](DungeonsandtrollsPlayersInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dungeonsAndTrollsRegister

> DungeonsandtrollsRegistration dungeonsAndTrollsRegister(body)

Register provided User to the Game and create a character.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let body = new DungeonsAndTrolls.DungeonsandtrollsUser(); // DungeonsandtrollsUser | 
apiInstance.dungeonsAndTrollsRegister(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DungeonsandtrollsUser**](DungeonsandtrollsUser.md)|  | 

### Return type

[**DungeonsandtrollsRegistration**](DungeonsandtrollsRegistration.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsRespawn

> Object dungeonsAndTrollsRespawn(respawn, opts)

Respawn the Character bound to the logged user.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let respawn = {key: null}; // Object | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsRespawn(respawn, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **respawn** | **Object**|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsSkill

> Object dungeonsAndTrollsSkill(skillUse, opts)

Use a skill (provided by an item) by the Character bound to the logged user.

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let skillUse = new DungeonsAndTrolls.DungeonsandtrollsSkillUse(); // DungeonsandtrollsSkillUse | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsSkill(skillUse, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skillUse** | [**DungeonsandtrollsSkillUse**](DungeonsandtrollsSkillUse.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dungeonsAndTrollsYell

> Object dungeonsAndTrollsYell(message, opts)

The Character bound to the logged user yells a messages (visible for everyone).

### Example

```javascript
import DungeonsAndTrolls from 'dungeons_and_trolls';
let defaultClient = DungeonsAndTrolls.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();
let message = new DungeonsAndTrolls.DungeonsandtrollsMessage(); // DungeonsandtrollsMessage | 
let opts = {
  'blocking': true // Boolean | default true
};
apiInstance.dungeonsAndTrollsYell(message, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**DungeonsandtrollsMessage**](DungeonsandtrollsMessage.md)|  | 
 **blocking** | **Boolean**| default true | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

