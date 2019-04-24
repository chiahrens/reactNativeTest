module.exports.command = function(using, selector, valueToSet, callback) {
  const _ = require("lodash");

  if (typeof valueToSet === "function") {
    callback = valueToSet;
    valueToSet = null;
  }

  const platformName = _.toLower(this.capabilities.platformName);

  const setValue = (id, value) => {
    // native-react android uses android.widget.CheckedTextView inside of android.widget.Spinner
    if (platformName === "android") {
      this.elementIdClick(id, result => {
        if (result.status === 0) {
          this.waitForElementPresent(
            `//android.widget.CheckedTextView[@text="${value}"]`,
            30000
          );
          this.click(`//android.widget.CheckedTextView[@text="${value}"]`);
        }
      });
      // native-react ios uses XCUIElementTypePickerWheel inside of XCUIElementTypePicker
    } else {
      this.elementIdElement(
        id,
        "xpath",
        "//XCUIElementTypePickerWheel",
        result => {
          if (result.status === 0) {
            this.elementIdValue(result.value.ELEMENT, value);
          }
        }
      );
    }
  };

  const getValue = (id, callback) => {
    this.elementIdElement(
      id,
      "xpath",
      platformName === "android"
        ? "//android.widget.TextView"
        : "//XCUIElementTypePickerWheel",
      result => {
        this.elementIdText(result.value.ELEMENT, result => {
          return callback(result.value);
        });
      }
    );
  };

  this.getMobileEl(using, selector, value => {
    if (valueToSet) {
      setValue(value.ELEMENT, valueToSet);
    } else {
      getValue(value.ELEMENT, callback);
    }
  });
  return this;
};
