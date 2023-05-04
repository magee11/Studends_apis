let initState = {
  number: 0,
};

const LeaveRequestReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + 1 };
    case "REMOVE":
      return { ...state, number: state.number - 1 };
    default:
      return initState;
  }
};

export default LeaveRequestReducer;
