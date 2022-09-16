describe('first demo project',function(){

    function addProducts(product){
        element.all(by.tagName("app-card")).each(function(item){
            item.element(by.css("h4 a")).getText().then(function(text){
                if(text===product){
                    item.element(by.css("button[class*='btn-info']")).click();
                }
            })
        })
    }
        
    it('opening angular-js website',function(){
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.manage().window().maximize();
        element(by.name('name')).sendKeys('Naveen');
        element(by.css("input[name='email']")).sendKeys('naveen@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('naveen123');
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option",'Female')).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        browser.sleep(3000);
        element(by.buttonText('Submit')).click().then(function(){
            element(by.css("div[class*='alert-success']")).getText().then(function(text){
                console.log(text);
            })
        })
        // browser.sleep(5000);
        // element(by.name('name')).clear();


        element(by.linkText("Shop")).click();
        
        addProducts('iphone X');
        addProducts('Samsung Note 8');

        element(by.partialLinkText("Checkout")).getText().then(function(text){
            var result=text.split('(');
            expect(result[1].trim().charAt(0)).toBe('2');

            /*to convert string into number in javascript we use Number() method
            let x=Number(result[1].trim().charAt(0));

            let y=x+1;
            console.log(y) //ans is 3
            expect(result[1].trim().charAt(0)).toBe(y);

            */
        })
        browser.sleep(3000);

        element(by.css("a[class*='btn-primary']")).click();
        element.all(by.tagName("tr")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(value){
                console.log(value);
            })
        })
        
    })

    
        
        // expect(element(by.css("div[class*='danger']"))).getText().toBe('Name should be at least 2 characters');



})