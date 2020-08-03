import React from "react";
import { addExpense } from "../actions/expenses";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: "",
    note: "",
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState((e) => ({ note }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Description"
          autoFocus={true}
          value={this.state.description}
          onChange={this.onDescriptionChange}
        ></input>
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        ></input>
        <textarea
          placeholder="Add a note for your expense (optional)"
          onChange={this.onNoteChange}
        ></textarea>
        <button>Add Expense</button>
      </div>
    );
  }
}
