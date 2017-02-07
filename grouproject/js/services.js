/*

My Custom JS
============

*/
$(document).ready(function(){
	$("#electric-btn").click(function(){
		$("#electricians").addClass("animated fadeInRight").show();
		$("#mechanics").addClass("animated fadeInRight").hide();
		$("#plumbers").addClass("animated fadeInRight").hide();
		
	})


	$("#plumber-btn").click(function(){
		$("#plumbers").addClass("animated fadeInRight").show();
		$("#electricians").addClass("animated fadeInRight").hide();
		$("#mechanics").addClass("animated fadeInRight").hide();

			
	})


	$("#mech-btn").click(function(){
		$("#mechanics").addClass("animated fadeInRight").show();
		$("#electricians").addClass("animated fadeInRight").hide();
		$("#plumbers").addClass("animated fadeInRight").hide();

	})
	



})
