import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import expensesTotal from '../../selectors/expenses-total';

test('should render component correctly for 1 expense.', () => {
    const total = expensesTotal([ expenses[1] ]);
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} expensesTotal={total} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render component correctly for multiple expenses', () => {
    const total = expensesTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expenses={expenses} expensesTotal={total} expenseCount={expenses.length} />);
    expect(wrapper).toMatchSnapshot();
});