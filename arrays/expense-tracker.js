const account = {
  name: "Ilya Klimov",
  expenses: [],
  income: [],
  addExpense: function(word, number) {
    this.expenses.unshift({
      description: word,
      amount: number
    });
  },
  addIncome: function(word, number) {
    this.income.push({
      description: word,
      amount: number
    });
  },
  getAccountSummary: function() {
    let totalEx = 0;
    let totalIn = 0;
    let balance = 0;
    this.expenses.forEach(function(expense) {
      totalEx = expense.amount + totalEx;
    });
    this.income.forEach(function(income) {
      totalIn = income.amount + totalIn;
    });
    balance = totalIn - totalEx;
    return `${
      this.name
    } has a balance of $${balance}. $${totalIn} in income. $${totalEx} in expenses.`;
  }
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
