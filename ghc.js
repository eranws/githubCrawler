$(document).ready(function(){

var url = "https://api.github.com/legacy/repos/search/eranws?callback=foo"

var xmlhttp;
xmlhttp=new XMLHttpRequest(); 
 
xmlhttp.open("GET",url,true);
xmlhttp.send();


  $("button").click(function(){
	
    $("#div1").get(url,
	
	function(response){
		var meta = response.meta
		var data = response.data
		console.log(meta)
		console.log(data)

    
	
	});
  });
});





