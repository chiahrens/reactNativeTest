const Test = require("../lib/base-test-class");

module.exports = new Test({
  "@tags": ["ios", "textField"],

  "Test Text Field": function (client) {

    // test using Nightwatch commands and xpath
    client.waitForElementPresent('//XCUIElementTypeTextField[@name="idCommon"]', 30000);
    client.setValue('//XCUIElementTypeTextField[@name="idCommon"]', "one");
    client.assert.containsText('//XCUIElementTypeTextField[@name="idCommon"]', "one");
    client.clearValue('//XCUIElementTypeTextField[@name="idCommon"]');
    client.assert.containsText('//XCUIElementTypeTextField[@name="idCommon"]', "");

    // test using nightwatch-extra commands and xpath
    client.setMobileElValue("xpath", '//XCUIElementTypeTextField[@name="idCommon"]', "two");
    client.assert.mobileElContainsText("xpath", '//XCUIElementTypeTextField[@name="idCommon"]', "two");
    client.clearMobileElValue("xpath", '//XCUIElementTypeTextField[@name="idCommon"]');
    client.assert.mobileElContainsText("xpath", '//XCUIElementTypeTextField[@name="idCommon"]', "");

    // test using nightwatch-extra commands and accessibility id. For react-native ios, it's testID.
    client.setMobileElValue("accessibility id", "idCommon", "tree");
    client.assert.mobileElContainsText("accessibility id", "idCommon", "tree");
    client.clearMobileElValue("accessibility id", "idCommon");
    client.assert.mobileElContainsText("accessibility id", "idCommon", "");
  }
});
