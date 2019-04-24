'use strict';
/*
* This is an example 'base class' from which your tests can inherit.
* See /tests for examples of tests which inherit from this base class.
* If you need a common setup/teardown (eg: for resetting the state of
* a mock server, for example), put it in before() and after() in the base
* class below. All inheritors will get this functionality.
*/

const Base = require('testarmada-nightwatch-extra/lib/base-test-class');
const util = require('util');
const argv = require('yargs').argv;
const _ = require('lodash');

const BaseTestClass = function (steps) {
  // call super-constructor
  Base.call(this, steps);
};

util.inherits(BaseTestClass, Base);

BaseTestClass.prototype = {
  before (client, callback) {
    const self = this;
    Base.prototype.before.call(this, client, () => {

      if (_.includes(['android'], _.toLower(self.client.globals.test_settings.desiredCapabilities.platformName)) &&
        self.client.globals.test_settings.desiredCapabilities.mock) {

        client
          .startActivity({
            appPackage: 'com.walmart.android',
            appActivity: 'com.walmart.android.app.automation.AutomationActivity',
            appWaitActivity: 'com.walmart.android.app.automation.AutomationActivity'
          })
          .clickMobileEl('id', 'com.walmart.android:id/automation_start_app_btn')
          .pause(5000, callback);

      } else {
        return callback();
      }

    });
  },

  after (client, callback) {
    Base.prototype.after.call(this, client, callback);
  },

  // Note: This method will not be mistaken by nightwatch for a step because
  // it is not enumerable (since it's on the prototype)
  getSiteURL () {
    return `${this.client.launchUrl}:${argv.mocking_port}`;
  }
};

module.exports = BaseTestClass;