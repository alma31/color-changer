(function(){
	"use strict";
	var app = {
		r:0,
		g:0,
		b:0,
		a:0,

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
			app.r = $('#R').val();
			app.couleur();
		


		},

		green: function(){
			app.g = $('#G').val();
			app.couleur();

			
		},

		blue: function(){
			app.b = $('#B').val();
			app.couleur();

		},

		alpha: function(){
			app.a = $('#A').val();
			app.couleur();
			
		},

		couleur: function(){
			$('body').css("background-color", "rgb("+app.r+","+app.g+","+app.b+""+app.a+")");
		}
	}


	$(document).ready(function(){
		app.init();
	});
})();