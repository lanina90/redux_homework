import {combineReducers} from "redux";
import counterReducer from "../components/counter/counterReducer";
import listReducer from "../components/list/listReducer";
import inputValueReducer from "../components/list/inputReducer";
import todoReducer from "../components/todolist/todoReducer";
import toDoAsyncReducer from "../components/asyncList/toDoAsyncReducer";

export default combineReducers({
  count: counterReducer,
  listArr: listReducer,
  inputValue: inputValueReducer,
  list: todoReducer,
  tasks: toDoAsyncReducer,
  toDo: toDoAsyncReducer

})