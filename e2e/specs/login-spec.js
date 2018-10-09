describe("Login functionality test suite", function(){
    var LoginPage = require("../pages/LoginPage.js");
    beforeEach(function(){
        browser.manage().window().maximize();
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    });
    
    it("Test case 1 :: Verifying login fuctionality with valid data", function(){
        //selenium : driver.findElement(by.id("username")).sendKeys("angular");
        var obj = new LoginPage();
        obj.enterUsername("angular");
        obj.enterPassword("password");
        obj.enterUsernameDescription("angular");
        obj.clickOnLoginButton();
        var actualMsg = obj.getLoggedInMessage();
        var expectedMsg = "You're logged in!!";
        expect(actualMsg).toEqual(expectedMsg)
        browser.sleep(3000);
    });

    it("Testcase 2:: Verify login functionality with invalid data", function(){
        var obj = new LoginPage();
        obj.enterUsername("angular123");
        obj.enterPassword("password123");
        obj.enterUsernameDescription("angular111");
        obj.clickOnLoginButton();
        var actualMsg = obj.getInvalidLoginErrorMessage();
        var expectedMsg = "Username or password is incorrect";
        expect(actualMsg).toEqual(expectedMsg)
        browser.sleep(3000);

        //selenium : driver.findElement(by.id("username")).sendKeys("angular");
        /*element(by.model("Auth.user.name")).sendKeys("angular123");
        element(by.id("password")).sendKeys("password1233");
        element(by.model("model[options.key]")).sendKeys("angular");
        element(by.partialButtonText("Login")).click();

        var actualErrorMessage = element(by.css("[ng-if='Auth.error']")).getText();
        var expectedErrorMessage = "Username or password is incorrect";

        expect(actualErrorMessage).toEqual(expectedErrorMessage);*/
    });
});