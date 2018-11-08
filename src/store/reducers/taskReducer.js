import * as actionTypes from "../../constants/actionTypes";
import Data from "../../constants/Data";

const INITIAL_DATA = {
  data: Data,
  taskGroups: {},
  currentGroup: null,
  currentTasks: []
};

const taskReducer = (state = INITIAL_DATA, action) => {
  console.log("STATE", state);
  console.log("ACTION", action);

  switch (action.type) {
    case actionTypes.LOAD_TASK_GROUPS:
      return {
        ...state,
        taskGroups: action.payload
      };
    case actionTypes.GET_TASKS:
      return {
        ...state,
        currentTasks: action.payload.tasks,
        currentGroup: action.payload.group
      };
    case actionTypes.UPDATE_TASK:
      console.log(action.payload);

      return {
        ...state,
        data: action.payload.data,
        currentTasks: action.payload.currentTasks
      };
    default:
      return state;
  }
};

export default taskReducer;
