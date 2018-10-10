
var LoginPage = function() {
    this.enterUsername = function(username){
        element(by.model("Auth.user.name")).sendKeys(username);
    }

    this.enterPassword = function(password) {
        element(by.id("password")).sendKeys(password);
    }

    this.enterUsernameDescription = function(description) {
        element(by.model("model[options.key]")).sendKeys(description);
    }

    this.clickOnLoginButton = function() {
        element(by.css(".btn.btn-danger")).click();
    }

    this.getInvalidLoginErrorMessage = function() {  
        return element(by.css('[ng-if="Auth.error"]')).getText();
    }

    this.getLoggedInMessage = function() {
        var actualResultElement = element(by.xpath('//p[@class="ng-scope"][contains(text(), "logged in")]'));
        var actualResultMsg;
        if(actualResultElement != undefined) {
            actualResultMsg = actualResultElement.getText();
        }
        return actualResultMsg;
    }
    this.getUsernameErrorMessage = function() {
        return element(by.xpath("//label[text()='Username']//parent::div//div[@class='ng-scope']")).getText();
    }

    this.getPasswordErrorMessage = function() {
        return element(by.xpath("//label[text()='Password']//parent::div//div[@class='ng-scope']")).getText();
    }

    this.getUsernameDescriptionErrorMessage = function() {
        return element(by.id("formly_1_input_username_0_description")).getText();
    }
}

module.exports = LoginPage;



