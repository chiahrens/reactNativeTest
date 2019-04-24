const Test = require("../lib/base-test-class");

module.exports = new Test({
  "@tags": ["android", "dropDown"],

  "Test Drop Down": function(client) {
    // set value on picker with mode=dialog
    client.rnPickerPick("accessibility id", "numberSelect", "Two");

    // set value on picker with mode=dropdown
    client.rnPickerPick("accessibility id", "numberSelect2", "Three");

    // need to for the original spinners to reappear because the selection dialog is a modal
    client.waitForElementPresent(
      '//android.widget.Spinner[@content-desc="numberSelect"]/android.widget.TextView',
      30000
    );
    client.waitForElementPresent(
      '//android.widget.Spinner[@content-desc="numberSelect2"]/android.widget.TextView',
      30000
    );

    // check values using xpath
    client.assert.containsText(
      '//android.widget.Spinner[@content-desc="numberSelect"]/android.widget.TextView',
      "Two"
    );
    client.assert.containsText(
      '//android.widget.Spinner[@content-desc="numberSelect2"]/android.widget.TextView',
      "Three"
    );

    // check values using accessibility id and custom command
    client.rnPickerPick("accessibility id", "numberSelect", result => {
      client.assert.ok(result === "Two");
    });
    client.rnPickerPick("accessibility id", "numberSelect2", result => {
      client.assert.ok(result === "Three");
    });

    client.pause(2000);
  }
});
