const Test = require("../lib/base-test-class");

module.exports = new Test({
  "@tags": ["ios", "scrollDown"],
  
  "Scroll Down": function (client) {
    client.clickMobileEl("accessibility id", "goToPageTwo");
    client.scrollDownToElement(0, 0, "accessibility id", "goToPageOne");
    client.pause(2000);
    client.clickMobileEl("accessibility id", "goToPageOne");
    client.pause(2000);
  }
});
