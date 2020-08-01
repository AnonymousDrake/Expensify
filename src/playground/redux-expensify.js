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

//Default Expenses State

const expensesReducerDefaultState = [];

//Setting Expenses Reducer

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

const setTextFilter = (text) => ({
  type: "Set_Text_Filter",
  text,
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

//Default Filters State

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

//Setting Filters Reducer

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

//Get Visible Expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

//Store Subscription

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//Dispatching Actions

const item = store.dispatch(
  addExpense({
    description: "Rent",
    note: "YoWWW",
    amount: 250,
    createdAt: 1000,
  })
);

const item2 = store.dispatch(
  addExpense({
    description: "Coffee",
    note: "Yo548498",
    amount: 2500000,
    createdAt: -1000,
  })
);

// store.dispatch(removeExpense({ id: item.expense.id }));

// store.dispatch(
//   editExpense(item2.expense.id, { description: "854", amount: 4471 })
// );

// store.dispatch(setTextFilter("YoBro"));

store.dispatch(setTextFilter("Coffee2"));

// store.dispatch(sortByDate());

// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));

//store.dispatch(setEndDate());
