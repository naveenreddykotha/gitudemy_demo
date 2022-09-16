describe('chain loactors',function(){
    it('getting url',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();
        element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        })
    })

    it('checking option',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('operator')).element(by.css("option:nth-child(4)")).getText().then(function(text){
            console.log(text);
        })

    })
})