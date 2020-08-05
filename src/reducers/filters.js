import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export default (state = filtersReducerDefaultState, action) => {
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
