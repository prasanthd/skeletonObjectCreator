function createArray(arrayOfObject, defaultValues, property) {
    if (arrayOfObject[0] instanceof Object) {
        var newArray = [];
        for (index in arrayOfObject) {
            newArray.push(createDeepObject(arrayOfObject[index], defaultValues));
        }
        return newArray;
    }
    return defaultValues && defaultValues[property];
}

function createObject(referenceObject, defaultValues) {
    var newObject = {};
    for (var property in referenceObject) {
        newObject[property] = defaultValues && defaultValues[property];
    }
    return newObject;
}

function createDeepObject(referenceObject, defaultValues) {
    var newObject = {};
    for (var property in referenceObject) {
        var isObject = referenceObject[property] instanceof Object;
        var isArray = referenceObject[property] instanceof Array;
        if (defaultValues && defaultValues[property]) {
            newObject[property] = defaultValues[property];
        } else if (isArray) {
            newObject[property] = createArray(referenceObject[property], defaultValues, property);
        } else if (isObject) {
            newObject[property] = createDeepObject(referenceObject[property], defaultValues);
        } else {
            newObject[property] = undefined;
        }
    }
    return newObject;
}

module.exports = {
    create: function(referenceObject) {
        return createObject(referenceObject);
    },
    createWith: function(referenceObject, defaultValues) {
        return createObject(referenceObject, defaultValues);
    },
    createDeep: function(referenceObject) {
        return createDeepObject(referenceObject);
    },
    createDeepWith: function(referenceObject, defaultValues) {
        return createDeepObject(referenceObject, defaultValues);
    }
};