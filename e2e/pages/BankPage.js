
var BankPage = function(){
    this.clickOnCustomerButton = function() {
        element(by.css("[ng-click='customer()']")).click();
    }

    this.clickOnYourNameDropdown = async function(){
        try {
            await element(by.model("custId")).click();
            return Promise.resolve("success");
        } catch(error) {
            return Promise.reject("Error while clicking button");
        }
        //return Promise.resolve("Element is clicked successfully...");
        return Promise.reject("Error while clicking the button.....");
    }
    
    this.selectNameFromDropdown = async function(name){
        if(name != undefined && name != "") {
            var names = await element.all(by.repeater("cust in Customers"));
            for(var index = 0; index < names.length; index++) {
                var text = await names[index].getText();
                if(text == name) {
                    names[index].click();
                }
            }
        }
    }

    this.clickOnLoginButton = function() {
        element(by.buttonText("Login")).click();
    }
}

module.exports = BankPage;