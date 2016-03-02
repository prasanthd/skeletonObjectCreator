
n createObject(templateObject, isDeepCopy, defaultValues) {
    var newObject = {};
    for (var property in templateObject) {
        var isObject = templateObject[property] instanceof Object;
        var isArray = templateObject[property] instanceof Array;
        var defaultValue = defaultValues && defaultValues[property];
        if (isArray) {
            var newObjArray = [];
            templateObject[property].forEach(function (obj) {
                newObjArray.push(createObject(obj, isDeepCopy, defaultValues));
            });
            newObject[property] = newObjArray;
        }
        else if(defaultValue) {
            newObject[property] = defaultValue;
        }
        else if (isDeepCopy && isObject) {
            newObject[property] = createObject(templateObject[property], isDeepCopy, defaultValues);
        }
    }
    return newObject;
}
module.exports = {
    create: function (referenceObject) {
        return createObject(referenceObject);
    },
    createDeep: function (referenceObject) {
        return createObject(referenceObject, true);
    },
    createWith: function (referenceObject, defaultValues) {
        return createObject(referenceObject, false, defaultValues);
    },
    createDeepWith: function (referenceObject, defaultValues) {
        return createObject(referenceObject, true, defaultValues);
    }
};
