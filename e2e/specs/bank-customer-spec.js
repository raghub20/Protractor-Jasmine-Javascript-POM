describe("Bank customer test suite", function(){

    beforeEach(function(){
        browser.manage().window().maximize();
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    });
    
    it("Customer login test case", async function(){
        var BankPage = require("../pages/BankPage.js");
        var obj = new BankPage();
        obj.clickOnCustomerButton();
        var result = await obj.clickOnYourNameDropdown();
        await obj.selectNameFromDropdown("Albus Dumbledore");
        obj.clickOnLoginButton();
        /*obj.clickOnYourNameDropdown().catch(function(reject){
            console.log(reject);
        }).then(function(resolve){
            console.log(resolve);
        });*/
        


        /*element(by.css("[ng-click='customer()']")).click();
        await element(by.model("custId")).click();
        var names = await element.all(by.repeater("cust in Customers"));
        names[1].click();
        element.all(by.repeater("cust in Customers")).then(function(names){
            names[1].click();
        })*/

        
        browser.sleep(3000);
    });
});