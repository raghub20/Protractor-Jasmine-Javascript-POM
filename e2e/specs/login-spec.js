describe("Login functionality test suite", function(){
    var LoginPage = require("../pages/LoginPage.js");
    var testData, loginPageObj;
    beforeAll(function(){
        var fs = require('fs');
        var rawData = fs.readFileSync("e2e/testdata.json");
        testData = JSON.parse(rawData);
        loginPageObj = new LoginPage();
    })
    
    beforeEach(function(){
        browser.manage().window().maximize();
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    });
    
    it("Test case 1 :: Verifying login fuctionality with valid data", function(){
        //selenium : driver.findElement(by.id("username")).sendKeys("angular");
        var obj = new LoginPage();
        loginPageObj.enterUsername(testData.testcase1.username);
        loginPageObj.enterPassword(testData.testcase1.password);
        loginPageObj.enterUsernameDescription(testData.testcase1.usernameDescription);
        loginPageObj.clickOnLoginButton();
        var actualMsg = loginPageObj.getLoggedInMessage();
        var expectedMsg = "You're logged in!!";
        expect(actualMsg).toEqual(expectedMsg);
    });

    it("Testcase 2:: Verify login functionality with invalid data", function(){
        var obj = new LoginPage();
        loginPageObj.enterUsername("angular123");
        loginPageObj.enterPassword("password123");
        loginPageObj.enterUsernameDescription("angular111");
        loginPageObj.clickOnLoginButton();
        var actualMsg = loginPageObj.getInvalidLoginErrorMessage();
        var expectedMsg = "Username or password is incorrect";
        expect(actualMsg).toEqual(expectedMsg)
    });

    it("Test Case 3 :: Verify the mandatory fields validation", function(){
        element(by.model("Auth.user.name")).sendKeys(protractor.Key.TAB);
        element(by.id("password")).sendKeys(protractor.Key.TAB);
        element(by.model("model[options.key]")).sendKeys(protractor.Key.TAB);
        var usernameErrorMsg = loginPageObj.getUsernameErrorMessage();//element(by.xpath("//label[text()='Username']//parent::div//div[@class='ng-scope']")).getText();
        var passwordErrorMsg = loginPageObj.getPasswordErrorMessage();//element(by.xpath("//label[text()='Password']//parent::div//div[@class='ng-scope']")).getText();
        var usernameDescriptionErrorMsg = loginPageObj.getUsernameDescriptionErrorMessage();//element(by.id("formly_1_input_username_0_description")).getText();

        //assertions
        expect(usernameErrorMsg).toEqual("You did not enter a username");
        expect(passwordErrorMsg).toEqual("You did not enter a username");
        expect(usernameDescriptionErrorMsg).toEqual("username description");
    });
});