/*global $,console*/
$(document).ready(function () {
	"use strict";
	var s = $(window).height()
	$("header> .slider").css("height", s);
	$("header .slide").css("height", s);
	$("header .slide").css("paddingTop", s/3);
	
	console.log($(window).height());
	
});
