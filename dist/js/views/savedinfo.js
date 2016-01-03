define(['jquery', 'underscore', 'backbone','text!../../templates/savedinfo.html'],
	function($, _, Backbone, SavedInfoTemplate) {
		'use strict';		
		var SavedInfoView = Backbone.View.extend({
			template: _.template(SavedInfoTemplate),
			initialize: function() {
	
			},
			
			  render: function(model) {	
				    this.$el.html(this.template());				   

				    this.$("#savedname").html('Имя: '+this.model.get('name'));
				    this.$("#savedemail").html('Е-маил: '+this.model.get('email'));
				    this.$("#savedphone").html('Телефон: '+this.model.get('phone')); 
				    
				    return this; 
			  }
			
		});
		return SavedInfoView;
});			