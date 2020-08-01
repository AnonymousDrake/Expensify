import { v4 as uuidv4 } from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "Add_Expense",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => {
  return {
    type: "Remove_Expense",
    id,
  };
};

const editExpense = (id, updates = {}) => ({
  type: "Edit_Expense",
  id,
  updates,
});

export { addExpense, removeExpense, editExpense };
