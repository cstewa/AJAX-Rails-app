$(document).ready(function(){
	$("#number").on("submit", function(event){	
		$.ajax({
			type: "get",
			url: "http://numbersapi.com/" + $("#user_number").val(),
      complete: function(response, status_text){
      	$("#container_of_results").prepend(response.responseText+ "<br>"); 
      }
		});
		event.preventDefault();
	});

	$("#name").on("submit", function(event){	
		$.ajax({
			type: "get",
			url: "http://api.icndb.com/jokes/random/?firstName=" + $("#first_name").val() + "&lastName=" + $("#last_name").val(),

      complete: function(response, status_text){
      	var joke = $.parseJSON(response.responseText).value.joke;
      	$("#container_of_results").prepend(joke+ "<br>");
      }
		});
	  event.preventDefault();
	});

});
