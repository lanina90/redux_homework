import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./rootReducer";
import initialStore from "./initialStore";
import thunk from "redux-thunk";


const store = createStore(reducer, initialStore,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  )

export default store