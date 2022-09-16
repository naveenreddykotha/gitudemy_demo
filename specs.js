// describe('angularjs homepage todo list', function() {
//     it('should add a todo', function() {
//       browser.get('https://angularjs.org');
  
      
//     });
// });


describe('test suite name',function(){ 
  it('validating url',function(){

    browser.get('https://angularjs.org/');
    browser.sleep(7000);
    browser.manage().window().maximize();
    expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
  })

  it('validating title of url',function(){
    browser.get('https://angularjs.org/');
    browser.sleep(5000);
    browser.manage().window().maximize();
    expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');

  })
})
