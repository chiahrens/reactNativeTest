'use strict';

module.exports = {
  storeLessThanSixItems: {
    username: 'anhtest1@walmart.com',
    password: '222222',
    orderType: 'Store Purchase',
    orderDate: 'August 24, 2017',
    orderYear: '2017',
    orderStoreAddress: '1661 JUNGERMANN RD SAINT PETERS MO 63304',
    orderStoreAddressAndroid: '1661 Jungermann Rd, Saint Peters, MO 63304',
    orderAmount: '$16.00 (4 items)'
  },
  onlineMoreThanSixItems: {
    orderType: 'Online Purchase',
    orderDate: 'October 21, 2015',
    orderYear: '2015',
    orderStatus: 'Delivered',
    moreItemTextAndroid: '+5 more items',
    orderAmount: '$20.78 (8 items)'
  },
  onlineShippedToHome: {
    orderType: 'Online Purchase',
    orderDate: 'May 18, 2015',
    orderYear: '2015',
    orderStatus: 'Shipped',
    orderAmount: '$34.94 (1 item)'
  },
  onlineEmailed: {
    orderType: 'Online Purchase',
    orderDate: 'December 2, 2016',
    orderYear: '2016',
    orderStatus: 'Email Sent',
    orderAmount: '$21.80 (2 items)'
  },
  onlinePendingReturn: {
    orderType: 'Online Purchase',
    orderDate: 'October 4, 2017',
    orderYear: '2017',
    orderStatus: 'Return Pending For 1 Item',
    orderAmount: '$518.66 (2 items)'
  },
  onlineReturned: {
    orderType: 'Online Purchase',
    orderDate: 'January 6, 2017',
    orderYear: '2017',
    orderStatus: '1 Item Returned',
    orderAmount: '$29.29 (1 item)'
  },
  onlineReturnedAndroid: {
    orderType: 'Online Purchase',
    orderDate: 'January 6, 2017',
    orderYear: '2017',
    orderStatus: '1 Item Returned',
    orderAmount: '$29.29 (1 item)'
  },
  onlinePickedUp: {
    orderType: 'Online Purchase',
    orderDate: 'March 20, 2017',
    orderYear: '2017',
    orderStatus: 'Picked Up',
    orderAmount: '$50.00 (1 item)'
  },
  onlineShippedToStore: {
    orderType: 'Online Purchase',
    orderDate: 'June 24, 2015',
    orderYear: '2015',
    orderStatus: 'Shipped',
    orderAmount: '$0.00 (1 item)'
  },
  onlineProcessing: {
    orderType: 'Online Purchase',
    orderDate: 'May 24, 2017',
    orderYear: '2017',
    orderStatus: 'Processing',
    orderAmount: '$21.93 (2 items)'
  },
  onlineDelivered: {
    orderType: 'Online Purchase',
    orderDate: 'October 21, 2015',
    orderYear: '2015',
    orderStatus: 'Delivered',
    orderAmount: '$15.80 (2 items)'
  },
  onlineCanceled: {
    orderType: 'Online Purchase',
    orderDate: 'July 30, 2015',
    orderYear: '2015',
    orderStatus: 'Canceled',
    orderAmount: '$10.07 (1 item)'
  },
  storeMoreThanSixItems: {
    orderType: 'Store Purchase',
    orderDate: 'July 11, 2017',
    orderYear: '2017',
    orderStoreAddress: '4400 13TH ST SAINT CLOUD FL 34769',
    orderStoreAddressAndroid: '4400 13th St, Saint Cloud, FL 34769',
    moreItemTextAndroid: '+5 more items',
    orderAmount: '$22.41 (8 items)'
  },
  barcodeSearchResultStore: {
    keyword: 'Cool Whip Original Whipped Topping, 8 oz',
    barcode: '043000009536',
    orderType: 'Store Purchase',
    orderDate: 'July 11, 2017',
    orderStoreAddress: '470 No. Mayo Trail, Paintsville, KY 41240',
    orderStoreAddressAndroid: '470 No. Mayo Trail, Paintsville, KY 41240',
    itemTitle: 'Cool Whip Original Whipped Topping, 8 oz',
    unitPrice: '$1.77',
    orderAmount: '$82.51 (26 items)'
  },
  searchResultStorePurchased: {
    keyword: 'Testing',
    orderType: 'Store Purchase',
    orderDate: 'August 24, 2017',
    orderStoreAddress: '1661 JUNGERMANN RD SAINT PETERS MO 63304',
    orderStoreAddressAndroid: '1661 Jungermann Rd, Saint Peters, MO 63304',
    itemTitle: 'Chew-lotta Canine Carry Outs Dog Snack - 2 CT',
    unitPrice: '$2.38',
    orderAmount: '$16.00 (4 items)'
  },
  searchResultStoreReturned: {
    keyword: 'Testing Returned',
    orderType: 'Store Purchase',
    orderDate: 'May 5, 2017',
    orderStoreAddress: '600 Showers Dr Mountain View, CA, 94040',
    orderStoreAddressAndroid: '600 Showers Dr, Mountain View, CA 94040',
    unitPrice: '$0.96',
    itemTitle: 'Orbit Wintermint Sugarfree Gum, single pack',
    orderAmount: '$0.86 (1 item)'
  },
  searchResultOnlineCanceled: {
    keyword: 'Testing Canceled',
    orderStatus: 'Canceled',
    orderType: 'Online Purchase',
    orderDate: 'August 12, 2015',
    itemTitle: 'BIC Velocity Retractable Ballpoint Pen, Black Ink, 1mm, Medium, Dozen',
    unitPrice: '$6.14',
    orderAmount: '$11.65 (1 item)'
  },
  searchResultOnlineDelivered: {
    keyword: 'Testing Delivered',
    orderStatus: 'Delivered',
    orderType: 'Online Purchase',
    orderDate: 'October 21, 2015',
    itemTitle: 'BIC Round Stic Ball Pen, Medium, Black, 60-Pack',
    unitPrice: '$4.98',
    orderAmount: '$15.80 (2 items)'
  },
  landingPageOrders: {
    orderType: 'Store Purchase',
    orderDate: 'August 24, 2017',
    orderYear: '2017',
    orderStoreAddress: '1308 HIGHWAY 33 S CLOQUET MN 55720',
    orderAmount: '$20.10 (6 items)'
  },
  addedReceipt: {
    tc: '20822563231172153200',
    orderStoreAddress: '470 NO. MAYO TRAIL PAINTSVILLE KY 41240',
    orderDate: 'July 11, 2017',
    orderYear: '2017',
    orderAmount: '$82.51 (26 items)'
  }
};
