//the Javacript for the search button on the add clothing page

$(document).ready(function (){//makes sure the page is ready for Jquery
	console.log("query ready");
 	$('.button').on('click', function(event){ //sets a click listener for when the button is clicked
		event.preventDefault();//prevents the page from refershing
		console.log('button clicked');
		$.ajax({ //uses ajax to send the search word to the back end
		    url: '/getSearch', //makes the url get Search
		    type: "GET", //its a get reques
		   	data: {search: $('#searchBar').val()}, //sets the data to the value enetered in the search bar
		    contentType: "application/json", //json application
		    success: function(res){ //if successful console log the response
		    	$('.data').append(res);
		    	console.log(res);
		    }, failure: function(res){ //if not cosole log fail
		    	console.log("FAIL");
		    }
		});

	});
});