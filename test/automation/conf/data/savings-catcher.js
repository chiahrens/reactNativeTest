'use strict';

/* eslint-disable max-len */

module.exports = {
  errorMessage: {
    zeroTotal: 'Sorry, this receipt is not eligible to be submitted to Savings Catcher.',
    weeklyLimit: 'Sorry, it looks like you have reached your weekly limit of 7 receipt submissions per week.' +
    ' You can submit more receipts once the week rolls over.',
    tooOld: 'This receipt is no longer eligible. The receipt must be within a week including today.',
    submitted: 'This receipt already exists in your account. Please try a different receipt.',
    submittedByDifferentUser: 'Sorry, this receipt has already been submitted by a different customer.' +
    ' Please contact us if you suspect this is an error.',
    groceryReceipt: 'Oops! We didn\'t recognize that entry.' +
    ' Please make sure you\'re scanning a receipt from a Walmart' +
    ' Store or tap \"Type Receipt info\" to enter it manually.',
    noInternetConnection: 'Sorry! Please check your internet connection and try again.',
    checkDateAndTc: 'Please check TC# and date and try again.',
    androidInterConnection: 'Oops! Please check your internet connection and try again.'
  },

  textMessage: {
    notEligible: 'We\'re sorry. This receipt did not register as eligible for Savings Catcher.' +
    ' The receipt number and/or purchase date were invalid.' +
    ' If you feel this is incorrect and your receipt is fewer than 7 days old,' +
    ' please go to Walmart.com and let us know.',
    noLowerPriceFound: 'Walmart had the lowest prices in the area for the items you bought.' +
    ' Well done, smart shopper!',
    helpText: ['If we find an eligible item advertised at a lower price, we\’ll' +
    ' give you the difference.',
      'We compare prices', 'If we find your items at a lower price, you get the difference.',
      'Rewards dollars are loaded to an eGift Card. Use online, or in store with Walmart Pay.'],
    dashboard: ['Your Rewards Dollars', 'Your rewards dollars are loaded to an eGift Card. Redeem online,' +
    ' or use in-store with Walmart Pay.']
  },

  resultSummary: {
    lowerPriceFound: ['3 Lower Prices Found', 'We found lower prices on 3 of the items you bought.'],
    noLowerPriceFound: ['No Lower Prices Found', 'Walmart had the lowest prices in the area for the items you bought. Well done, smart shopper!'],
    notEligibleReceipt: ['Receipt Not Eligible', 'Your receipt #8379 8336 6097 3757 6676 is not eligible for Savings Catcher.'],
    receiptRecevied: ['Receipt Received', 'We\'re comparing prices of your eligible items against advertised deals in your area. We\'ll let you know once we have the results!']
  },

  receiptConfirmation: {
    confirmationCopy: ['Thanks for your receipt!', 'As of October 29, Walmart Pay will be the exclusive way to submit to Savings Catcher.', 'We’re comparing prices with local advertised deals, and we’ll let you know when we’re done (may take 2-3 days).']
  },

  learnMore: {
    walmartPayAccount: ['Important Changes to Savings Catcher', 'Starting October 29, 2018, Walmart Pay will be the exclusive way to submit your receipt to Savings Catcher. The ability to scan paper receipts within the app or submit via desktop will be discontinued.', 'Questions? Contact us at 1.800.WALMART'],
    nonWalmartPayAccount: ['Important Changes to Savings Catcher', 'Starting October 29, 2018, Walmart Pay will be the exclusive way to submit your receipt to Savings Catcher. The ability to scan paper receipts within the app or submit via desktop will be discontinued.', 'It’s easier with Walmart Pay', 'Scan the QR code at the register and submit your eReceipts with one tap.', 'Questions? Contact us at 1.800.WALMART']
  }
};
