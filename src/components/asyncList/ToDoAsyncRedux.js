import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTask, LoadedAction, removeTasks} from "./asyncAction";
import { v4 as uuidv4 } from "uuid";

class ToDoAsyncRedux extends Component {
  state = {
    text: '',
    selectedIds: []
  }

  componentDidMount() {
    this.props.dispatch(LoadedAction())
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
    const {tasks} = this.props.todos
    const {dispatch} = this.props

    const listElement = tasks.map((el, index) => {
      return <p key={el.id}>{index} - {el.title}
        <input
          type='checkbox'
          id={el.id}
          onChange={(e) => this.idTaskHandler(e)}
        /></p>
    })

    return (
      <div>

        <div className='list-one'>
          <h2>TO_DO list with Redux ( Async ) </h2>
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
              if (this.state.text.trim()) {
                const newTask = {
                  id: String(uuidv4()),
                  title: this.state.text
                };
                dispatch(addTask(newTask));
                this.cleanInput();
              }
            }}>ADD TASK
          </button>
          <button
            onClick={() => {
              dispatch(removeTasks(this.state.selectedIds))
              this.setState({selectedIds: []});
            }}> REMOVE TASK
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todos: store.tasks,
  }

}
export default connect(mapStateToProps)(ToDoAsyncRedux);