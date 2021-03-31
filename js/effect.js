window.onload = function() {
		$(".container").fadeOut(0).fadeIn(500);
	};

$(document).ready(function(){

	$("#button_page1").click(function(){
		$(".container").slideUp(600);
		setTimeout(function () {
			window.location.href="index.html"
		}, 600);
	});

	$("#button_page2").click(function(){
		$(".container").slideUp(600);
		setTimeout(function() {
			window.location.href="page_2.html"
		}, 600);
	});

	$("#button_page3").click(function(){
		$(".container").slideUp(600);
		setTimeout(function () {
			window.location.href="page_3.html"
		}, 600);
	});

	$("#Internet").click(function(){
		if (true == $("#category_internet").is(':visible')) {
			$("#category_internet").slideUp(500);
		} else {
			$("#category_internet").slideDown(500);
		};
		$("#arrow-1").toggleClass("flip");
	});

	$("#Telecom").click(function(){
		if (true == $("#category_telecom").is(':visible')) {
			$("#category_telecom").slideUp(500);
		} else {
			$("#category_telecom").slideDown(500);
		};
		$("#arrow-2").toggleClass("flip");
	});

	$("#PAN").click(function(){
		if (true == $("#category_pan").is(':visible')) {
			$("#category_pan").slideUp(500);
		} else {
			$("#category_pan").slideDown(500);
		};
		$("#arrow-3").toggleClass("flip");
	});

	$("#LAN").click(function() {
		if (true == $("#category_lan").is(":visible")) {
			$("#category_lan").slideUp(500);
		} else {
			$("#category_lan").slideDown(500);
		};
		$("#arrow-4").toggleClass("flip");
	});

	$("#MAN").click(function() {
		if (true == $("#category_man").is(":visible")) {
			$("#category_man").slideUp(500);
		} else {
			$("#category_man").slideDown(500);
		};
		$("#arrow-5").toggleClass("flip");
	});

	$("#WAN").click(function() {
		if (true == $("#category_wan").is(":visible")) {
			$("#category_wan").slideUp(500);
		} else {
			$("#category_wan").slideDown(500);
		};
		$("#arrow-6").toggleClass("flip");
	});

	$("#GAN").click(function() {
		if (true == $("#category_gan").is(":visible")) {
			$("#category_gan").slideUp(500);
		} else {
			$("#category_gan").slideDown(500);
		};
		$("#arrow-7").toggleClass("flip");
	});

	$("#bus").click(function() {
		if (true == $("#category_bus").is(':visible')) {
			$("#category_bus").slideUp(500);
		} else {
			$("#category_bus").slideDown(500);
		};
		$("arrow-8").toggleClass("flip");
	});

	$("#ring").click(function() {
		if (true == $("#category_ring").is(':visible')) {
			$("#category_ring").slideUp(500);
		} else {
			$("#category_ring").slideDown(500);
		};
		$("arrow-9").toggleClass("flip");
	});

	$("#star").click(function() {
		if (true == $("#category_star").is(':visible')) {
			$("#category_star").slideUp(500);
		} else {
			$("#category_star").slideDown(500);
		};
		$("arrow-10").toggleClass("flip");
	});

	$("#mesh").click(function() {
		if (true == $("#category_mesh").is(':visible')) {
			$("#category_mesh").slideUp(500);
		} else {
			$("#category_mesh").slideDown(500);
		};
		$("arrow-11").toggleClass("flip");
	});

	$("#tree").click(function() {
		if (true == $("#category_tree").is(':visible')) {
			$("#category_tree").slideUp(500);
		} else {
			$("#category_tree").slideDown(500);
		};
		$("arrow-12").toggleClass("flip");
	});
});