'use strict';
define(['firebase','backbonefire','models/activity'],function(FireBase,BackboneFire,ActivityModel) {
	 
	 var  DataCollection  = Backbone.Firebase.Collection.extend({
		   model: ActivityModel,
		   url: "https://vlk-firebase.firebaseio.com"

		 });
	
	return new DataCollection();
});