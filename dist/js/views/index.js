define(['jquery', 'underscore', 'backbone', 'text!../../templates/index.html', 'views/header', 'views/footer','collections/data','views/menuitem','views/selected','channel'],
	function($, _, Backbone, IndexTemplate, HeaderView, FooterView,DataCollection,MenuItem,SelectedView,channel) {
		'use strict';
		var MenuItemView = MenuItem;

		var IndexView = Backbone.View.extend({
			el: $('.container'),
			template: _.template(IndexTemplate),

//			events: {
//				'click .logo': 'showAlert'
//			},
			initialize: function() {
				
				channel.on('select_activity',this.activity_was_selected);
				
				this.collection = DataCollection;								
				this.listenTo(this.collection, 'add', this.addOne);				
				this.headerView = HeaderView;
				this.footerView = FooterView;
				
			},
			render: function() {

				this.$el.append(this.template);				
				this.headerView.$el = $('#header');
				this.headerView.render();
				this.footerView.$el = $('#footer');
				this.footerView.render();
				this.list = this.$("#menu");

				
			},	
//			showAlert: function() {
//				alert('Hell Yeah!');
//			},
			 addOne: function(todo) {
				    var view = new MenuItemView({model: todo});
				    this.list.append(view.render().el);
			},
			 activity_was_selected: function(model) {
				 var view = new SelectedView({model: model});
				 this.list= $('#selected');
				 this.list.empty();
				 this.list.append(view.render().el);
				   
			   }
			
		});
		return IndexView;
	});