import {ADD_TASK, LOADING_END, LOADING_ERROR, LOADING_START, REMOVE_TASK, UPDATE_TASK} from "./asyncAction";
import initialStore from "../../redux/initialStore";




export default function toDoAsyncReducer(todos = initialStore.todos, {type, error, payload}){
  switch (type) {
    case LOADING_START:
      return {
        ...todos,
        loading: true
      }
    case LOADING_END:
      return {
        ...todos,
        loading: false,
        tasks: payload
      }
    case LOADING_ERROR:
      return{
        ...todos,
        loading: false,
        error
      }
    case ADD_TASK:
      return {
        ...todos,
        tasks: [...todos.tasks, payload]
      }
    case REMOVE_TASK:
      return {
        ...todos,
        tasks: todos.tasks.filter(task => !payload.includes(task.id))
      }
    case UPDATE_TASK:
      return {
        ...todos,
        tasks: todos.tasks.map(task => task.id === payload.id ? payload : task)
      }
    default:
      return todos
  }
}

