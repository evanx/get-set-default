
module.exports = (object, key, defaultValue) => {
    if (object[key] === undefined) {
       object[key] = defaultValue;
    }
    return object[key];    
}

