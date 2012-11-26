$(document).ready(function(){


var url = "https://api.github.com/legacy/repos/search/eranws?callback=foo"

    $("#div1").append(url);
	
    $("#div1").getJSON(url,	

	function(response){
    $("#div1").append("result: \n");
			var meta = response.meta
			var data = response.data
			console.log(meta)
			console.log(data)
		});
});





