const expect = require("chai").expect;
const request = require('request');
//var URL = require('http://api.shopstyle.com/api/v2/categories?pid=uid6596-39966186-25');

describe("Style", function(){
	it("should recvie a 200 / OK HTTP Status Code", function(done){
		request('http://api.shopstyle.com/api/v2/products?pid=uid6596-39966186-25', function(err, res, body){
			expect(res.statusCode).to.eq(200);
		done();
		});
	});
	//Passes
	it("should have a category in the name for route", function(done){
		request('http://api.shopstyle.com/api/v2/products?pid=uid6596-39966186-25', function(err, res, body){
			if(typeof(body) == "string"){
				body = JSON.parse(body);
			}
			expect(body.metadata.category.name).to.not.be.empty;
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
			expect(body.products.name).to.not.be.empty;
			return done();
		});
	});
});