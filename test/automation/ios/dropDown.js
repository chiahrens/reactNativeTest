const Test = require("../lib/base-test-class");

module.exports = new Test({
  "@tags": ["ios", "dropDown"],

  "Test Drop Down": function(client) {
    // set value on picker with mode=dialog
    client.rnPickerPick("accessibility id", "numberSelect", "Two");

    // set value on picker with mode=dropdown
    client.rnPickerPick("accessibility id", "numberSelect2", "Three");

    // check values using xpath
    client.assert.value(
      '//XCUIElementTypePicker[@name="numberSelect"]/XCUIElementTypePickerWheel',
      "Two"
    );
    client.assert.value(
      '//XCUIElementTypePicker[@name="numberSelect2"]/XCUIElementTypePickerWheel',
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
