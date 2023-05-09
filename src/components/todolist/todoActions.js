import { v4 as uuidv4 } from "uuid";
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export const taskActionCreator = (task) => {
  return {
    type: ADD_TASK,
    payload: { id: uuidv4(), text: task }
  }
}

export const deleteTaskActionCreator = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}


