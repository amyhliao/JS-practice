var SPENDING_LIMIT = 500;
var SALES_TAX = 0.09;
var PHONE = 120;
var ACCESSORY = 20;

var available_funds = 1000.01;
var cost = 0;

function totalCost(cost) {
    return "$" + cost.toFixed(2);
}
// purchase of phones while funds are still avail
while (cost < available_funds) {
    cost = cost + PHONE;
    // if there are funds to buy accessories
    if (cost < SPENDING_LIMIT) {
        cost = cost + ACCESSORY;
    }
}

// need to incorporate sales tax

// checks if the phone is affordable; enough money in avaialable funds
