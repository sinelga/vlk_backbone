define(['jquery', 'underscore', 'backbone', 'text!../../templates/selected.html','channel'],
	function($, _, Backbone, SelectedTemplate,channel) {
		'use strict';		
		var SelectedView = Backbone.View.extend({
			template: _.template(SelectedTemplate),
//			template: _.template("<span class='badge'><%=id %></span><%= title %>"),
			initialize: function() {
	
			},			
			  render: function() {
	
				    this.$el.html(this.template(this.model.toJSON()));
				    return this;
				  },				
			
		});
		return SelectedView;
});