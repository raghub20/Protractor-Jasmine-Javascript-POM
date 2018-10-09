
const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors : 1
});

const PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
const prettyReporter = new PrettyReporter({
    // required, there is no default
    path: __dirname + '/results',
    screenshotOnPassed: true
});

exports.config = {
    //what kind of test framework we wants use
    framework : "jasmine",

    //The target browser name
    capabilities : {
        'browserName' : 'chrome'
    },

    //selenium server jar
    seleniumServerJar : "./node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar",

    specs : ["./e2e/specs/*spec.js"],

    onPrepare() {
        //jasmine.getEnv().addReporter(reporter);
        jasmine.getEnv().addReporter(prettyReporter);
    }
}
