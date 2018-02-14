Api endpoints for the automation api


*GET* `/all` :  List of all devices
```
[
    {
        'name': <String>,
        'description': <String>,
        'status': <boolean>
    },

    ...
]

```

Response body


*GET*  `/one` : Info about one device

Response Body:
```
{   
    'name': <string>,
    'description': <string>,
    'value': <boolean>
}

```

*POST*  `/one` : Turn device on or off


Request body :
```
{
    'value': <boolean> //to represent on or off
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
 `/two`