(function(){
	"use strict";
	var app = {

		red: 

		init:function(){
			app.listerners();
		},

		listerners: function(){
			$('#R').on('input change', app.red);
			$('#G').on('input change', app.green);
			$('#B').on('input change', app.blue);
			$('#A').on('input change', app.alpha);
		},

		red: function(){
			var r = $('#R').val();
			
		},

		green: function(){
			console.log('teste');
		},

		blue: function(){
			console.log('teste');

		},

		alpha: function(){
			
		},
	};


	$(document).ready(function(){
		app.init();
	});
})();