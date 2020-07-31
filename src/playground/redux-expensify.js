import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

//For Expenses

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

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "Add_Expense":
      return [...state, action.expense];
    case "Remove_Expense":
      return state.filter(({ id }) => id != action.id);
    default:
      return state;
  }
};

//For filters

const filtersReducerDefaultState = {
  text: "rent",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Combining Reducers

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addExpense({ description: "Hello", note: "Yo", amount: 25, createdAt: 4 })
);

const item = store.dispatch(
  addExpense({
    description: "HelloWWW",
    note: "YoWWW",
    amount: 250,
    createdAt: 5,
  })
);

store.dispatch(removeExpense({ id: item.expense.id }));
