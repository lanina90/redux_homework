import axios from "axios";

export const GET_TODOS = 'GET_TODOS'
export const TODO_LOADING_START = 'TODO_LOADING_START'
export const TODO_LOADING_END = 'TODO_LOADING_END'



export const getToDoListAC = () => {
  return (dispatch) => {

    dispatch({
      type: TODO_LOADING_START
    })

    axios('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res => {
        dispatch({
          type: GET_TODOS,
          payload: res.data
        })
      })
  }

}


