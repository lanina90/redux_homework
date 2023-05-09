import React, {Component} from 'react';
import {connect} from "react-redux";
import {getToDoListAC} from "./newToDoAction";

class NewToDoAsync extends Component {
  componentDidMount() {
    this.props.dispatch(getToDoListAC())
  }

  render() {
    const {toDo} = this.props.toDo
    const listElem = toDo.map((item )=> {
      return <p key={item.id}>{item.title}</p>
    })
    return (
      <div>
        {listElem}
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    toDo: store.toDo
  }
}
export default connect(mapStateToProps)(NewToDoAsync);