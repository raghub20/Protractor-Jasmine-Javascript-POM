describe("Sample test suite", function(){

    it("Sample test case", function(){
        expect(true).toBeTruthy();
    });

   it("Read data from json file", function(){
        var fs = require('fs');
        var rawData = fs.readFileSync("e2e/testdata.json");
        var jsonData = JSON.parse(rawData);
        console.log(jsonData);
   });

   fit("Read data from protractor configuration file", function(){
        console.log("login url = " + browser.params.loginUrl);
        console.log("Bank url = " + browser.params.bankUrl);
   });
});