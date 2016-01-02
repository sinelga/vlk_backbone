define(['jquery', 'underscore', 'backbone', 'text!../../templates/selected.html','channel','collections/clients'],
	function($, _, Backbone, SelectedTemplate,channel,ClientsCollection) {
		'use strict';		
		var SelectedView = Backbone.View.extend({
			template: _.template(SelectedTemplate),
			initialize: function() {
	
			},	
			  events: {
				  "click .btn" : "save_client"
			  }, 
			  render: function() {
				  	
				    this.$el.html(this.template(this.model.toJSON()));
				     this.name = this.$("#name");
				     this.email = this.$("#email");
				     this.phone = this.$("#phone");
				    
				    return this;
				  },
				  
				   save_client: function(event) {
					   event.preventDefault();   
					   var vlkclientscollection = ClientsCollection;
					   var today = new Date();
					   vlkclientscollection.create({date:today.toString(),name:this.name.val(),email:this.email.val(),phone:this.phone.val()});
					   this.name.val('');
					   this.email.val('');
					   this.phone.val('');
	    
					  }	
			
		});
		return SelectedView;
});