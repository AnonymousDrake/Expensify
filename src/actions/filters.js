export const setTextFilter = (text) => ({
  type: "Set_Text_Filter",
  text,
});

export const sortByDate = () => ({
  type: "Sort_By_Date",
  sortBy: "date",
});

export const sortByAmount = () => ({
  type: "Sort_By_Amount",
  sortBy: "amount",
});

export const setStartDate = (startDate = "1/1/2020") => ({
  type: "Start_Date",
  startDate,
});

export const setEndDate = (endDate = "1/1/2020") => ({
  type: "End_Date",
  endDate,
});
