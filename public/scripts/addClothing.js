
$(document).ready(function (){
	console.log("query ready");
	$('.button').on('click', function(event){
		event.preventDefault();
		console.log('button clicked');
		$.ajax({
		    url: '/getSearch',
		    type: "GET",
		    body: JSON.stringify(body),
		    contentType: "application/json",
		    success: function(res){
		    	console.log(res);
		    }, failure: function(res){
		    	console.log("FAIL");
		    }
		});

	});
});