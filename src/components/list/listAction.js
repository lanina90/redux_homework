export const ADD_ITEM = 'ADD_TO'
export const SET_INPUT_VALUE= 'SET_INPUT_VALUE'

export const listAction = (el) => {
  return {
    type: ADD_ITEM,
    payload: el
  }
}

export const inputAction = (value) => {
  return {
    type: SET_INPUT_VALUE,
    payload: value
  }
}

