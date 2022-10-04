import React from 'react';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = (props) => (
    <div>
        {
            props.expenseCount === 0 ? (
                 <p>Viewing no expenses</p>
            ) : (
                props.expenseCount === 1 ? (
                    <p>Viewing {props.expenseCount} expense totalling {numeral(props.expensesTotal / 100).format('$0,0.00')} </p> 
                ) : (
                    <p>Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')} </p> 
                )
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
