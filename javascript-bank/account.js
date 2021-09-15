/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var depositTrans = new Transaction('deposit', amount);
    this.transactions.push(depositTrans);
    return true;
  } else {
    return false;
  }
};
Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var depositTrans = new Transaction('withdrawal', amount);
    this.transactions.push(depositTrans);
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  var accountBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      accountBalance += parseInt(this.transactions[i].amount);
    } else {
      accountBalance -= parseInt(this.transactions[i].amount);
    }
  }
  return accountBalance;
};
