describe('checking all method',function(){
    function add(num1,num2){
        element(by.model('first')).sendKeys(num1);
        element(by.model('second')).sendKeys(num2);
        element(by.id('gobutton')).click();
    }


    it('getting url so on...',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        add(2,3);
        add(2,4);
        add(4,4);
        add(3,4);

        element.all(by.repeater('result in memory')).count().then(function(text){
            console.log(text);
        })

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(value){
                console.log(value);
                
            })
        })
    })
})