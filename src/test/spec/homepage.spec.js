describe('angularjs homepage', function() {
	
  it('should greet the named user', function() {
	browser.ignoreSynchronization = true;
    browser.get('http://localhost:9000');
    
    expect(browser.getTitle()).toEqual('Volkov');
    browser.sleep(1000);
    
//    var menu = element.all(by.tagName('a'));
//    expect(menu.get(1).getText()).toEqual('Heroes');
    
    
//    menu.get(1).getText().click();
    browser.sleep(3000);
//    expect(element(by.tagName('h2').getText())).toEqual('CRISIS CENTER');
    
//    expect(element.all(by.tagName('h2')).get(0).getText()).toEqual('HEROES');
            
//    element.all(by.css('.badge')).first().isPresent().then(function(result) {
//
//		if (result) {
//			var inputel = element.all(by.css('.badge')).first();
//
//			browser.sleep(2000);
//			inputel.click();			
//			browser.sleep(2000);
//			expect(element.all(by.tagName('h3')).get(0).getText()).toEqual('"Mr. Nice"');
//    	   	
//		}
//    	    	
//    });

  });

  
  
  
  
  
  
  
  
//  describe('todo list', function() {
//    var todoList;
//
//    beforeEach(function() {
//      browser.get('http://localhost:3000');
//
//      todoList = element.all(by.repeater('todo in todos'));
//    });
//
//    it('should list todos', function() {
//      expect(todoList.count()).toEqual(2);
//      expect(todoList.get(1).getText()).toEqual('build an angular app');
//    });
//
//    it('should add a todo', function() {
//      var addTodo = element(by.model('todoText'));
//      var addButton = element(by.css('[value="add"]'));
//
//      addTodo.sendKeys('write a protractor test');
//      addButton.click();
//
//      expect(todoList.count()).toEqual(3);
//      expect(todoList.get(2).getText()).toEqual('write a protractor test');
//    });
//  });
  
});