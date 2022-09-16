describe('checking dropdown',function(){
    function calculator(num1,num2,mode){
        element(by.model('first')).sendKeys(num1);
        element(by.model('second')).sendKeys(num2);

        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(values){
                if(values===mode){
                    item.click();
                }
            })
        })
        element(by.id('gobutton')).click();
    }

    it('getting opion values',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

        calculator(2,3,'MULTIPLICATION');
        calculator(5,5,'DIVISION');
        calculator(20,10,'MODULO');

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(values){
                console.log(values);
            })
        })
        // element.all(by.tagName('option')).each(function(item){
        //     item.getAttribute('value').then(function(values){
        //         console.log(values);
        //     })
        // })
    })
})