//Adding all Expense

const totalAmount = (expenses) => {
  let sum = 0;
  expenses.map((expense) => (sum += parseFloat(expense.amount, 10)));
  return sum;
};

export default totalAmount;
