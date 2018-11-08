import { createStore, applyMiddleware } from "redux";
import taskReducer from "./reducers/taskReducer";
import thunk from "redux-thunk";

const store = createStore(taskReducer, applyMiddleware(thunk));
export default store;
