$(document).ready(function(){
   $("#midlink a").hover(function(){
	$(this).find("div").toggle();
    });
var day=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	$(".leftnav").html("Happy "+(day[new Date().getDay()])+"!");
	});

