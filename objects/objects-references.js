let myAccount = {
  name: "Ivan Petrov",
  expenses: 0,
  income: 0
};

const addIncome = function(account, income) {
  account.income = account.income + income;
};

const addExpense = function(account, expense) {
  account.expenses = account.expenses + expense;
};

const resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

const getAccountSummary = function(account) {
  const balance = account.income - account.expenses;
  return `${account.name} has $${balance} on his/her balance. $${
    account.income
  } in income.
  $${account.expenses} in expenses`;
};
