import {
  LOAD_TASK_GROUPS,
  GET_TASKS,
  UPDATE_TASK
} from "../../constants/actionTypes";
import TaskModel from "../../model/TaskModel";

export const loadTaskGroups = () => {
  return (dispatch, getState) => {
    console.log(getState().data);

    dispatch({
      type: LOAD_TASK_GROUPS,
      payload: TaskModel.taskGroups(getState().data)
    });
  };
};

export const getTasks = (e, history, group) => {
  e.preventDefault();

  return (dispatch, getState) => {
    dispatch({
      type: GET_TASKS,
      payload: {
        tasks: TaskModel.getTasks(getState().data, group),
        group: { ...group }
      }
    });
    history.push(`/group/${group.id}`);
  };
};

export const updateTask = (task, completed, group) => {
  return (dispatch, getState) => {
    const newData = TaskModel.updateTask(getState().data, task.id, completed);
    dispatch({
      type: UPDATE_TASK,
      payload: {
        data: newData,
        currentTasks: TaskModel.getTasks(newData, group)
      }
    });
  };
};
