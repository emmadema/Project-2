//runs tests to make sure the ShopStyle API is functioning
const expect = require("chai").expect;
const request = require('request');

describe("Style", function(){
	it("should recvie a 200 / OK HTTP Status Code", function(done){
		request('http://api.shopstyle.com/api/v2/products?pid=uid6596-39966186-25', function(err, res, body){
			expect(res.statusCode).to.eq(200); //expect a status 200 to be the response
		done();
		});
	});
	//Passes
	it("should have a category in the name for route", function(done){
		request('http://api.shopstyle.com/api/v2/products?pid=uid6596-39966186-25', function(err, res, body){
			if(typeof(body) == "string"){
				body = JSON.parse(body);
			}
			expect(body.metadata.category.name).to.not.be.empty; //expect the name category on the api to not be emopty
		done();
		});
	});
	//Passes
	it("should have a category in the name for sub categories", function(done){
		request('http://api.shopstyle.com/api/v2/products?pid=uid6596-39966186-25', function(err, res, body){
			for (var i=0; i < body.products.length; i++){
				if(typeof(body) == "string"){
					body = JSON.parse(body);
				}
			}
			expect(body.products.name).to.not.be.empty;//expect the products to also have a name
			return done();
		});
	});
});