'use strict';

const usersData = require('./users');
const endlessAisleData = require('./endless-aisle');
const paymentMethodsData = require('./payment-methods');
const combinedPurchaseHistoryData = require('./combined-purchase-history');
const storeMapData = require('./store-map');
const storeFinderData = require('./store-finder');
const storePageData = require('./store-page');
const keycodeData = require('./keycode');
const storeModeData = require('./store-mode');
const savingsCatcherData = require('./savings-catcher');
const walmartPayData = require('./walmart-pay');
const keywordsMap = require('./keywords');

module.exports = {
  ios: 'ios',
  android: 'android',
  users: usersData,
  endlessAisle: endlessAisleData,
  paymentMethods: paymentMethodsData,
  cph: combinedPurchaseHistoryData,
  storeMap: storeMapData,
  keycode: keycodeData,
  storeFinder: storeFinderData,
  storeMode: storeModeData,
  savingsCatcher: savingsCatcherData,
  walmartPay: walmartPayData,
  keywords: keywordsMap,
  storePage: storePageData
};
