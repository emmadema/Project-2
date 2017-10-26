
$(document).ready(function (){//makes sure the page is ready for Jquery
	console.log("query ready");
 	$('.delete').on('click', function(event){ //sets a click listener for when the button is clicked
		event.preventDefault();//prevents the page from refershing
		console.log('button clicked');
		$.ajax({ //uses ajax to send the search word to the back end
		    url: '/addClothing', //makes the url get Search
		    type: "DELETE", //its a get reques
		   	data: $(this).val(), //sets the data to the value enetered in the search bar
		    contentType: "application/json", //json application
		    success: function(res){ //if successful console log the response
		    	console.log(res);
		    }, failure: function(res){ //if not cosole log fail
		    	console.log("FAIL");
		    }
		});

	});
});