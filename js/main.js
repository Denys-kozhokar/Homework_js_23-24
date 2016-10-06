requirejs.config({
    paths: {
		jquery: 'https://code.jquery.com/jquery-1.12.4.min',
		lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash'
    }
});

require(
    ['controller', 'model', 'view', 'jquery'],
    
    function( Controller, Model, View){
    	var toDoList = ['watch lesson', 'read articles', 'finish homework'];
    	var model = new Model(toDoList);
    	var view = new View(model);
    	var controller = new Controller(model, view);


    }
);