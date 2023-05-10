import axios from "axios";
import {toDoApi} from "../../API/api";


export const LOADING_START = 'LOADING_START'
export const LOADING_END = 'LOADING_END'
export const LOADING_ERROR = 'LOADING_ERROR'

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const UPDATE_TASK = 'UPDATE_TASK';

export function LoadedAction() {

  return (dispatch) => {
    dispatch({type: LOADING_START})

    toDoApi.getToDoItems()
      .then(res => {
        const tasksWithIdAsString = res.data.map(task => ({...task, id: String(task.id)}));
        dispatch({
          type: LOADING_END,
          payload: tasksWithIdAsString
        })
      })
      .catch(error => {
        dispatch({type: LOADING_ERROR, error})
      })
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function removeTasks(ids) {
  return {
    type: REMOVE_TASK,
    payload: ids
  }
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    payload: task
  }
}