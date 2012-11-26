$(document).ready(function(){


var url = "https://api.github.com/legacy/repos/search/eranws?callback=?"

    $("#div1").append(url);
	
    $.getJSON(url,	

	function(response){
    $("#div1").append("result: \n");
			var meta = response.meta
			var data = response.data
			console.log(meta)
			console.log(data)
		});
});




/*
    $.each(result, function(i, field){
        $("div").append(field + " ");
      });
*/   

