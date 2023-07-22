Home automation solution in javascript using Johnny V.

Api endpoints for the automation api


*GET* `/all` :  List of all devices
```
[
    {
        'id': <Integer>
        'name': <String>,
        'status': <boolean>
    },

    ...
]

```

Response body


*GET*  `/1` : Info about one device

Response Body:
```
{   
    'id': <Integer>
    'name': <string>,
    'status': <boolean>
}

```

*POST*  `/1` : Turn device on or off


Request body :
```
{
    'status': <boolean> //to represent on or off
    'echo': <boolean> //return the new value
}

```

Response Body :

```
{
    'success': <boolean>
    'status': <boolean> //only with echo
}

```

**Same Endpoints for device 2** 
 `/2`
