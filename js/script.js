$(document).ready(function () {
	
	/* tabs */
	var $tab1 = $('a.linkTab1');
	var $tab2 = $('a.linkTab2');
	var $tab3 = $('a.linkTab3');

	$tab2.on('click', function() {
		$(".tabs-2").css({"display": "inline"});
	 	$("a.linkTab2").addClass("active");
	 	$("a.linkTab1").removeClass("active");
	 	$("a.linkTab3").removeClass("active");
	 	$(".tabs-3").css({"display": "none"});
	 	$(".tabs-1").css({"display": "none"});
	});

	$tab3.on('click', function() {
	 	$(".tabs-3").css({"display": "inline"});
	 	$("a.linkTab3").addClass("active");
	 	$("a.linkTab1").removeClass("active");
	 	$("a.linkTab2").removeClass("active");
	 	$(".tabs-2").css({"display": "none"});
	 	$(".tabs-1").css({"display": "none"});
	});

	$tab1.on('click', function() {
	 	$(".tabs-1").css({"display": "inline"});
	 	$("a.linkTab1").addClass("active");
	 	$("a.linkTab3").removeClass("active");
	 	$("a.linkTab2").removeClass("active");
	 	$(".tabs-3").css({"display": "none"});
	 	$(".tabs-2").css({"display": "none"});
	});	

	/* tooltip */

	var $button = $('.showHelp');
	var $name = $('.name');
	var $lastName = $('.lastName');
	var $address = $('.address');
	
	$('.name').hover(function() {;
		$('.tip1').fadeIn({queue : false});
	}, function(){
		$('.tip1').fadeOut(1000);
	});
	
	$('.lastName').hover(function() {
		$('.tip2').fadeIn({queue : false});
	}, function(){
		$('.tip2').fadeOut(1000);
	});
	
	$('.address').hover(function() {
		$('.tip3').fadeIn({queue : false});
	}, function(){
		$('.tip3').fadeOut(1000);
	});
	 
	$button.on('click', function() {
		$('.tip1, .tip2, .tip3').fadeIn();
	});	 
})
