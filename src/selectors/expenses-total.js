export default (expenses) => {
    const amounts = expenses.map(expense => expense.amount);
    return amounts.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
