describe('inspecting elements',function(){ 
    it('validating title',function(){ 
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(3000);
        browser.manage().window().maximize();
        browser.sleep(5000);
        expect(browser.getTitle()).toBe('Super Calculator');
        browser.sleep(4000);
    })
    it('checking input box',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();
        
        element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
            console.log(text);

        })


        // 'tagname[attribute="value"]'
        // real value wii be displayed when you resolve the promise
        // after getText() we get the promise object in pending state that protractor will not resolve
        // for 90% methods protractor wii resolve automatically
        // that what we write .then method to resolve promise and that value is passing into function(text)
        expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe("10");
        // here in this case getText() value will get because jasmine accertions will take care
        

    })
})

