describe("skeletonObjectCreator.js", function() {
	var skeletonObjectCreator = require("../skeletonObjectCreator.js"),
		referenceProduct = {
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
	describe("create", function() {
		it("should create a skeleton object from the given reference object", function() {
			var expectedObject = {
				"id": undefined,
				"name": undefined,
				"price": undefined,
				"tags": undefined,
				"dimensions": undefined,
				"warehouseLocation": undefined
			}
			var newSkeletonObject = skeletonObjectCreator.create(referenceProduct);
			expect(newSkeletonObject).toEqual(expectedObject);
		})
	})
	describe("createWith", function() {
		it("should create a skeleton object from the given reference object with default values", function() {
			var expectedObject = {
					"id": undefined,
					"name": "A blue mouse",
					"price": undefined,
					"tags": ["blue", "mouse"],
					"dimensions": undefined,
					"warehouseLocation": undefined
				},
				defaultValues = {
					"name": "A blue mouse",
					"tags": ["blue", "mouse"]
				};
			var newSkeletonObject = skeletonObjectCreator.createWith(referenceProduct, defaultValues);
			expect(newSkeletonObject).toEqual(expectedObject);
		})
	})
	describe("createDeep", function() {
		it("should create a nested skeleton object from the given reference object", function() {
			var expectedObject = {
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
			};
			var newSkeletonObject = skeletonObjectCreator.createDeep(referenceProduct);
			expect(newSkeletonObject).toEqual(expectedObject);
		})
	})
	describe("createDeepWith", function() {
		it("should create a nested skeleton object from the given reference object with default values", function() {
			var expectedObject = {
				"id": undefined,
				"name": "A blue mouse",
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
			var newSkeletonObject = skeletonObjectCreator.createDeepWith(referenceProduct, {
				"name": "A blue mouse",
				"latitude": -78.75,
				"longitude": 20.4
			});
			expect(newSkeletonObject).toEqual(expectedObject);
		});
		it("should create a nested skelton object with array of object", function() {
			referenceProduct = {
				"id": 2,
				"name": "An ice sculpture",
				"price": 12.50,
				"tags": [{name: "cold", type: "fiction"}, {name: "ice", type: "fiction"}]
			}
			var expectedObject = {
				"id": 2,
				"name": undefined,
				"price": undefined,
				"tags": [{name: undefined, type: "fiction"}, {name: undefined,type: "fiction"}]
			}

			var newSkeletonObject = skeletonObjectCreator.createDeepWith(referenceProduct,{id: 2,type: "fiction"});
			expect(newSkeletonObject).toEqual(expectedObject);
		});
	})
})