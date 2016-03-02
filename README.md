# skeletonObjectCreator
A small library to create a js skeleton object from a reference object.

##Usage
var skeletonObjectCreator = require('skeletonObjectCreator.js')

Example reference object,

var referenceProduct = {
        "id": 2,
        "name": "An ice sculpture",
        "price": 12.50,
        "tags": ["cold", "ice"],
        "dimensions": {
            "length": 7.0,
            "width": 12.0,
            "height": 9.5
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    }

##Methods
###1. create
	Creates one level deep skeleton object with values as undefined.

	Arguments
	1. Reference object

	Returns
	Returns one level deep skeleton object.

    var newSkeletonProduct = skeletonObjectCreator.create(referenceProduct);

    //newSkeletonProduct

    {
    	"id": undefined,
        "name": undefined,
        "price": undefined,
        "tags": undefined,
        "dimensions": undefined,
        "warehouseLocation": undefined
    }

###2. createWith
	Creates one level deep skeleton object with the default values and other values as undefined.

	Arguments
	1. Reference object
	2. Object with default values

	Returns
	Returns one level deep skeleton object with the default values.

    var newSkeletonProduct = skeletonObjectCreator.createWith(referenceProduct,{"name":"A blue mouse", "tags":["blue","mouse"]});

    //newSkeletonProduct

    {
    	"id": undefined,
        "name": "A blue mouse",
        "price": undefined,
        "tags":["blue","mouse"],
        "dimensions": undefined,
        "warehouseLocation": undefined
    }

###3. createDeep
	Creates nested skeleton object with values as undefined.

	Arguments
	1. Reference object

	Returns
	Returns nested skeleton object.

    var newSkeletonProduct = skeletonObjectCreator.createDeep(referenceProduct);

    //newSkeletonProduct

    {
        "id": undefined,
        "name": undefined,
        "price": undefined,
        "tags": undefined,
        "dimensions": {
            "length": undefined,
            "width": undefined,
            "height": undefined
        },
        "warehouseLocation": {
            "latitude": undefined,
            "longitude": undefined
        }
    }

###4. createDeepWith
	Creates nested skeleton object with the default values and other values as undefined. 

	Arguments
	1. Reference object
	2. Object with default values

	Returns
	Returns nested skeleton object with the default values.

    var newSkeletonProduct = skeletonObjectCreator.createDeep(referenceProduct,{"name":"A blue mouse", "latitude": -78.75,
            "longitude": 20.4});

    //newSkeletonProduct
    {
        "id": undefined,
        "name":"A blue mouse",
        "price": undefined,
        "tags": undefined,
        "dimensions": {
            "length": undefined,
            "width": undefined,
            "height": undefined
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    }
