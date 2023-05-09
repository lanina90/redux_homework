import axios from "axios";


export const LOADING_START = 'LOADING_START'
export const LOADING_END = 'LOADING_END'
export const LOADING_ERROR = 'LOADING_ERROR'

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export function LoadedAction() {

  return (dispatch)  => {
    dispatch({type: LOADING_START})

    axios('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const tasksWithIdAsString = res.data.map(task => ({ ...task, id: String(task.id) }));
        dispatch({
          type: LOADING_END,
          payload: tasksWithIdAsString
        })
          .catch(error => {
            dispatch({type: LOADING_ERROR, error})
          })
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