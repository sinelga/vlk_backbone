'use strict';
define(['firebase','backbonefire','models/client'],function(FireBase,BackboneFire,ClientModel) {
	 
	 var  ClientsCollection  = Backbone.Firebase.Collection.extend({
		   model: ClientModel,
		   url: "https://vlk-customers.firebaseio.com"

		 });
	
	return new ClientsCollection();
});