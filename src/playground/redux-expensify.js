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

const editExpense = (id, updates = {}) => ({
  type: "Edit_Expense",
  id,
  updates,
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "Add_Expense":
      return [...state, action.expense];
    case "Remove_Expense":
      return state.filter(({ id }) => id != action.id);
    case "Edit_Expense":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//For filters

const setTextFilter = (text = "") => ({
  type: "Set_Text_Filter",
  text: text,
});

const sortByDate = () => ({
  type: "Sort_By_Date",
  sortBy: "date",
});

const sortByAmount = () => ({
  type: "Sort_By_Amount",
  sortBy: "amount",
});

const setStartDate = (startDate = "1/1/2020") => ({
  type: "Start_Date",
  startDate,
});

const setEndDate = (endDate = "1/1/2020") => ({
  type: "End_Date",
  endDate,
});

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "Set_Text_Filter":
      return { ...state, text: action.text };
    case "Sort_By_Date":
      return { ...state, sortBy: action.sortBy };
    case "Sort_By_Amount":
      return { ...state, sortBy: action.sortBy };
    case "Start_Date":
      return { ...state, startDate: action.startDate };
    case "End_Date":
      return { ...state, endDate: action.endDate };
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

//Store Subscription

store.subscribe(() => {
  console.log(store.getState());
});

//Dispatching Actions

// store.dispatch(
//   addExpense({ description: "Hello", note: "Yo", amount: 25, createdAt: 4 })
// );

// const item = store.dispatch(
//   addExpense({
//     description: "HelloWWW",
//     note: "YoWWW",
//     amount: 250,
//     createdAt: 5,
//   })
// );

// const item2 = store.dispatch(
//   addExpense({
//     description: "HelloWWW46584",
//     note: "Yo548498",
//     amount: 2500000,
//     createdAt: 6,
//   })
// );

// store.dispatch(removeExpense({ id: item.expense.id }));

// store.dispatch(
//   editExpense(item2.expense.id, { description: "854", amount: 4471 })
// );

// store.dispatch(setTextFilter("YoBro"));

// store.dispatch(setTextFilter(""));

// store.dispatch(sortByDate());

// store.dispatch(sortByAmount());

store.dispatch(setStartDate("24/11"));

store.dispatch(setEndDate("9/12"));
