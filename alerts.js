describe('validating alerts',function(){
    it('validating non angular app',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');

        browser.manage().window().maximize();

        browser.switchTo().frame("courses-iframe");
        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text);
        })
        // element(by.id('confirmbtn')).click();
        // browser.switchTo().alert().accept().then(function(){
        //     browser.sleep(3000);
        // })

    })
})