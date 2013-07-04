$(document).ready(function(){
	$("#number").on("submit", function(event){	
		$.ajax({
			type: "get",
			url: "http://numbersapi.com/" + $("#user_number").val(),

      complete: function(response, status_text){
      	$("div").prepend(response.responseText+ "<br>"); 
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
      	$("div").prepend(joke+ "<br>");
      }
		});
	event.preventDefault();
	});

});
