/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

// Bank.prototype.openAccount = function (holder, balance) {
//   if (Number.isInteger(balance) && balance > 0) {
//     var newAcount = new Account(this.nextAccountNumber, holder);
//     var depositBalance = new Transaction('deposit', balance);
//     this.transactions.push(depositTrans);
//     return true;
//   } else {
//     return false;
//   }
// };
