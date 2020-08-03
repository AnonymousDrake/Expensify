import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 }) => ({
  type: "INCREMENT",
  incrementBy,
}); //Key and value are both same. So, incrementBy:incrementBy is same as incrementBy
const decrementBy = ({ decrementBy = 1 }) => ({
  type: "DECREMENT",
  decrementBy,
});
const resetCount = () => ({ type: "RESET" });
const setCount = ({ count }) => ({ type: "COUNT", count });
//import {type, incrementBy= 1} from payload;

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return { count: 0 };
    case "COUNT":
      return { count: action.count };
    default:
      return {
        count: state.count,
      };
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementBy({ decrementBy: 2 }));

store.dispatch(decrementBy({}));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 45 }));
