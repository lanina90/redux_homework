import initialStore from "../../redux/initialStore";
import {SET_INPUT_VALUE} from "./listAction";

const inputValueReducer = (state = initialStore.inputValue, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default inputValueReducer

