import initialStore from "../../redux/initialStore";
import {DEC, INC, RAND, RESET} from "./counterAction";


const counterReducer = (count = initialStore.count, action) => {
  switch (action.type) {
    case INC:
      return ++count
    case DEC:
      return --count
    case RESET:
      return 0
    case RAND:
      return count + action.payload
    default:
      return count
  }
}

export default counterReducer