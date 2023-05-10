import './App.scss';
import CounterRedux from "./components/counter/CounterRedux";
import {resetActionCreator} from "./components/counter/counterAction";

import React, {Component} from 'react';
import {connect, useDispatch} from "react-redux";
import ListRedux from "./components/list/ListRedux";
import ToDoRedux from "./components/todolist/ToDoRedux";
import ToDoAsyncRedux from "./components/asyncList/ToDoAsyncRedux";




const App = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className='counter'>
        <button onClick={() => dispatch(resetActionCreator())}>RESET COUNTER FROM APP</button>
        <CounterRedux/>
      </div>

      <ListRedux/>

      <ToDoRedux/>

      <ToDoAsyncRedux/>

    </div>
  );
};

export default App;




// class App extends Component {
//   render() {
//     const {dispatch} = this.props
//     return (
//       <div>
//         <div className='counter'>
//           <button onClick={() => dispatch(resetActionCreator())}>RESET COUNTER FROM APP</button>
//           <CounterRedux/>
//         </div>
//
//         <ListRedux/>
//
//         <ToDoRedux/>
//
//         <ToDoAsyncRedux/>
//
//       </div>
//     );
//   }
// }
//
// export default connect()(App);
