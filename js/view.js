define(
   'view',
   ['lodash'],
   function() {
       function View(model) {
			var self = this;

			function init() {
				var wrapper = _.template($('#wrapper_template').html());
				$('.container').append(wrapper);
				
				self.elements = {
					input: $('.item__value'),
					addBtn: $('.item__add'),
					list: $('.list')
				};
				self.renderList(model.data);
			}

			self.renderList = function(data) {
				
				var list = _.template($('#list_template').html());
				self.elements.list.html(list({data: data}));
			}

			init();

	   }
       return View;
   }
);