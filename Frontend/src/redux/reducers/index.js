// reducers
import profileReducer from "./profileReducer";
import LeaveRequest from "./leaveRequestReducer";

// import combineREducer from redux
import { combineReducers } from "redux";

const AllReducers = combineReducers({
  profileReducer: profileReducer,
  LeaveRequest: LeaveRequest,
});

export default AllReducers;
