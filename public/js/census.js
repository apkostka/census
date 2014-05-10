// census.js
// a library for working with the US Census api

;(function($, window, undefined){
	"use strict";

	function Census(options){
		
		var self = this;

		var defaults = {
			api_key: ''
		}
		$.extend(defaults, options);

		self.initialize();

	}

	Census.prototype = {
		
		initialize: function(){
			var self = this;
			
		},

		get: function(){
			var self = this;

		}

	}
}(jQuery, window));