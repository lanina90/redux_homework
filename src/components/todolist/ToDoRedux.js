import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTaskActionCreator, taskActionCreator} from "./todoActions";

class ToDoRedux extends Component {
  state = {
    text: '',
    selectedIds: []
  }

  addTextToStore(even) {
    this.setState({
      text: even.target.value
    })
  }

  idTaskHandler(e) {
    const id = e.target.id;
    if (e.target.checked) {
      this.setState(prevState => ({
        selectedIds: [...prevState.selectedIds, id]
      }));
    } else {
      this.setState(prevState => ({
        selectedIds: prevState.selectedIds.filter(selectedId => selectedId !== id)
      }));
    }
  }

  cleanInput() {
    this.setState({text: ''})
  }

  render() {
    const {list, dispatch} = this.props
    const listElement = list.map((el, index) => {
      return <p key={el.id}>{index} - {el.text}
        <input
        type='checkbox'
        id={el.id}
        onChange={(e) => this.idTaskHandler(e)}
      /></p>
    })

    return (
      <div>

        <div className='list-one'>
          <h2>TO-DO list with Redux</h2>
          {listElement}
          <div>
            <input
              type="text"
              onChange={(e) => this.addTextToStore(e)}
              value={this.state.text}
            />
          </div>
          <button
            onClick={() => {
              dispatch(taskActionCreator(this.state.text))
              this.cleanInput()
            }}>ADD TASK
          </button>
          <button
          onClick={() => {
            dispatch(deleteTaskActionCreator(this.state.selectedIds))
            this.setState({ selectedIds: [] });
          }}> REMOVE TASK</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    list: store.list,
  }
}
export default connect(mapStateToProps)(ToDoRedux);