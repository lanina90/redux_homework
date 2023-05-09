import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTask, LoadedAction, removeTasks, updateTask} from "./asyncAction";
import {v4 as uuidv4} from "uuid";
import Loader from "../loader/Loader";

class ToDoAsyncRedux extends Component {
  state = {
    text: '',
    selectedIds: [],
    editing: null
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

  taskEditHandler(id, title){
    const updatedTask = {id, title}
    this.props.dispatch(updateTask(updatedTask));
    this.setState({editing: null})
  }

  render() {
    const {tasks, loading} = this.props.todos
    const {dispatch} = this.props

    const listElement = tasks.map((el, index) => {
      return (
        <div className='tasks__item' key={el.id}>
          <input
            type='checkbox'
            id={el.id}
            onChange={(e) => this.idTaskHandler(e)}
          />
          <p>{index + 1}</p>
          <div className='tasks__item-text'>
            {this.state.editing === el.id ? (
              <input
                type="text"
                defaultValue={el.title}
                onBlur={(e) => this.taskEditHandler(el.id, e.target.value)}
              />
            ) : (
              <p>{el.title}</p>
            )}

          </div>
          <div className='tasks__btns'>
            <button
            onClick={() => dispatch(removeTasks([el.id]))}
            >Remove</button>
            <button
              onClick={() => {
                this.setState({ editing: el.id });
              }}
            >Edit</button>
          </div>

        </div>
      );
    })

    return (
      <div>
        <div className='tasks'>
          <h2>TO_DO list with Redux ( Async ) </h2>
          {loading ? <Loader/> : <div>{listElement}</div>}
            <input
              type="text"
              placeholder='Type your task here...'
              onChange={(e) => this.addTextToStore(e)}
              value={this.state.text}
            />
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