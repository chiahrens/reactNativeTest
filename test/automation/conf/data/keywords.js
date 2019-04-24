'use strict';

/* eslint-disable max-len */
module.exports = {
  android: {
    shared: {
      mock: 'susi.setMock(${description}, ${fixture}, ${variant})',
      login: 'susi.getSignInCommands(${username}, ${password})',
      loginFromMenu: 'susi.getSignInFromMenuCommands(${username}, ${password})'
    },
    'payment-methods': {
      enterCreditCard: 'commands.enterCreditCardCommands(${firstName}, ${lastName}, ${number}, ${cvv}, ${phoneNumber}, ${streetAddress}, ${city}, ${state}, ${zipCode1})',
      removeGiftCards: 'commands.removeGiftCards()',
      removeCreditCards: 'commands.removeCreditCards()',
      paymentMethodsPage: 'commands.verifyPaymentMethodScreen()',
      navToCreditCardForm: 'commands.navToCreditCardFormInPaymentMethods()',
      cardIsAdded: 'commands.verifyCardIsAdded(${description}, ${type})'
    },
    'savings-catcher': {
      navToSavingsCatcher: 'commands.getCommandsToNavigateToSavingsCatcher()',
      getStarted: 'commands.getStarted()',
      enterTcAndDate: 'commands.getCommandsToEnterTcAndDate()',
      weeklyLimitReached: 'commands.verifyWeeklySubmitLimitReached()'
    }
  },
  ios: {
    shared: {
      mock: 'susi.setMock(${description}, ${fixture}, ${variant})',
      clickLoginLink: 'susi.clickLoginLink()',
      login: 'susi.getSignInCommands(${username}, ${password})'
    },
    'payment-methods': {
      navToCreditCardForm: 'commands.navToCreditCardFormInPaymentMethods()',
      enterCreditCard: 'commands.enterCreditCardCommands(${firstName}, ${lastName}, ${number}, ${cvv}, ${phoneNumber}, ${streetAddress}, ${city}, ${state}, ${zipCode1})',
      cardIsAdded: 'commands.verifyCardIsAdded(${description}, ${type})'
    }
  }
};
