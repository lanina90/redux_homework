import React, {Component} from 'react';
import {decActionCreator, incActionCreator, randActionCreator} from "./counterAction";
import {connect} from "react-redux";

class CounterRedux extends Component {

  render() {
    const {count, dispatch} = this.props

    return (
      <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(incActionCreator())}>INC</button>
        <button onClick={()=>dispatch(decActionCreator())}>DEC</button>
        <button onClick={()=>dispatch(randActionCreator(Math.floor(Math.random()*10))) }>RANDOM</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(CounterRedux);