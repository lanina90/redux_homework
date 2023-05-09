import initialStore from "../../redux/initialStore";
import {GET_TODOS, TODO_LOADING_END, TODO_LOADING_START} from "./newToDoAction";

export const toDoListReducer = (toDoItemFromStore = initialStore.toDo, action) => {
  switch (action.type){
    case TODO_LOADING_START:
      return {
        ...toDoItemFromStore,
        loading: true,
      }
    case TODO_LOADING_END:
      return {
        ...toDoItemFromStore,
        loading: false,
        toDoItemFromStore:action.payload
      }
    default:
      return toDoItemFromStore
  }
}