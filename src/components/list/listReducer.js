import initialStore from "../../redux/initialStore";
import {ADD_ITEM} from "./listAction";


const listReducer = (state = initialStore.listArr, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default listReducer