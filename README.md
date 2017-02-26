# get-set-default

Get an object property, setting and returning default value if does not exist yet.

Implementation:
```javascript
module.exports = (object, key, defaultValue) => {
    if (object[key] === undefined) {
       object[key] = defaultValue;
    }
    return object[key];
}
```

<hr>
https://twitter.com/@evanxsummers

