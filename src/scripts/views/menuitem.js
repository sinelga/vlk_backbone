define(['jquery', 'underscore','backbone','channel'],function($,_,Backbone,channel) {
		'use strict';

		var MenuItem = Backbone.View.extend({
			  tagName:  "li",			
			  template: _.template("<span class='badge'><%=id %></span><%= title %>"),
			  events: {
				  "click" : "select_activity"
			  },
			  initialize: function() {
			    this.listenTo(this.model, "change", this.render);

			  },
			  render: function() {
			    this.$el.html(this.template(this.model.toJSON()));
			    return this;
			  },			  
			  select_activity: function() {

				 channel.trigger('select_activity',this.model);
				 
			  },
			  			  			  
			});
		return MenuItem;
});