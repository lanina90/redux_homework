import initialStore from "../../redux/initialStore";
import {ADD_TASK, DELETE_TASK} from "./todoActions";


const taskReducer = (list = initialStore.list, action) => {
  switch (action.type){
    case ADD_TASK: {
      return [...list, action.payload]
    }
    case DELETE_TASK: {
      return list.filter((task) => !action.payload.includes(task.id));

    }
    default: {
      return list
    }
  }
}

export default taskReducer