let initState = {
  number: 0,
  name: "john",
  age: 29,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + 1 };
    case "REMOVE":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export default profileReducer;
