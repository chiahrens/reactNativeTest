const Test = require("../lib/base-test-class");

module.exports = new Test({
  "@tags": ["android", "textField"],

  "Test Text Field": function (client) {

    // test using Nightwatch commands and xpath
    client.waitForElementPresent('//android.widget.EditText[@content-desc="idCommon"]', 30000);
    client.setValue('//android.widget.EditText[@content-desc="idCommon"]', "one");
    client.assert.containsText('//android.widget.EditText[@content-desc="idCommon"]', "one");
    client.clearValue('//android.widget.EditText[@content-desc="idCommon"]');
    client.assert.containsText('//android.widget.EditText[@content-desc="idCommon"]', "");

    // test using nightwatch-extra commands and xpath
    client.setMobileElValue("xpath", '//android.widget.EditText[@content-desc="idCommon"]', "two");
    client.assert.mobileElContainsText("xpath", '//android.widget.EditText[@content-desc="idCommon"]', "two");
    client.clearMobileElValue("xpath", '//android.widget.EditText[@content-desc="idCommon"]');
    client.assert.mobileElContainsText("xpath", '//android.widget.EditText[@content-desc="idCommon"]', "");

    // test using nightwatch-extra commands and accessibility id. For react-native android, it's accessibilityLabel.
    client.setMobileElValue("accessibility id", "idCommon", "tree");
    client.assert.mobileElContainsText("accessibility id", "idCommon", "tree");
    client.clearMobileElValue("accessibility id", "idCommon");
    client.assert.mobileElContainsText("accessibility id", "idCommon", "");
  }
});
