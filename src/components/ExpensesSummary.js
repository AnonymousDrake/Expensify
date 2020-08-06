import React from "react";
import expensesTotal from "../selectors/expensesTotal";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

const ExpensesSummary = ({ expenseCount, expensesTotalAmount }) => {
  const expenseNumber = expenseCount === 1 ? "expense" : "expenses";
  const totalAmount = numeral(expensesTotalAmount / 100).format("$0,0.00");
  return (
    <h1>
      Viewing {expenseCount} {expenseNumber} totalling {totalAmount}
    </h1>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotalAmount: expensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
