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
        var isObject=referenceObject[property] instanceof Object;
        var isArray=referenceObject[property] instanceof Array;
        if(isArray){
            if(referenceObject[property][0] instanceof Object){
                var newArray=[];
                referenceObject[property].foreach(function(object){
                    newArray.push(createDeepObject(object, defaultValues));    
                });
                return newArray;
            }
            else{
                newObject[property] = defaultValues && defaultValues[property]; 
            }
        }
        else if (isObject) {
            newObject[property] = createDeepObject(referenceObject[property], defaultValues);
        }
        else{
            newObject[property] = defaultValues && defaultValues[property];    
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