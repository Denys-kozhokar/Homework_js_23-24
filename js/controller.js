
define(
   'controller',
   [],
   function() {
       function Controller(model, view) {
			var self = this;
			view.elements.addBtn.on('click', addItem);
			view.elements.list.on('click', '.item__delite', removeItem);
			view.elements.list.on('click', '.item__edit', editItem);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}

			function editItem() {
				var item = $(this).attr('data-value');
				var text = prompt('Edit the item', item);
				model.editItem(item, text);
				view.renderList(model.data);
			}

	   }
       return Controller;
   }
);