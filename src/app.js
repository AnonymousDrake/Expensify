import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/store";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortBydate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import expensesReducer from "./reducers/expenses";
import filtersReducer from "./reducers/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill" }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));

store.dispatch(addExpense({ description: "Rent", amount: 1220 }));

store.dispatch(setTextFilter("Water"));

console.log(
  getVisibleExpenses(store.getState().expenses, store.getState().filters)
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
