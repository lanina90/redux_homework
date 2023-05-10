import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector, useStore} from "react-redux";
import {addTask, LoadedAction, removeTasks, updateTask} from "./asyncAction";
import {v4 as uuidv4} from "uuid";
import Loader from "../loader/Loader";



const ToDoAsyncRedux = (props) => {

  const [text, setText] = useState('')
  const [selectedIds, setSelectedIds] = useState([])
  const [editing, setEditing] = useState(null)

  const dispatch = useDispatch();
  const {tasks, loading} = useSelector(state => state.tasks)

  useEffect(() => {
    dispatch(LoadedAction())
  }, [dispatch])

  const addTextToStore = (even) => {
    setText(even.target.value)
  }

  const idTaskHandler = (e) => {
    const id = e.target.id
    if (e.target.checked) {
      setSelectedIds(prevSelectedIds => [...prevSelectedIds, id])
    } else {
      setSelectedIds(prevSelectedIds => prevSelectedIds.filter(selectedId => selectedId !== id))
    }
  }

  const cleanInput = () => {
    setText('')
  }

  const taskEditHandler = (id, title) => {
    const updatedTask = {id, title}
    dispatch(updateTask(updatedTask))
    setEditing(null)
  }

  const listElement = tasks.map((el, index) => (
      <div className='tasks__item' key={el.id}>
        <input
          type='checkbox'
          id={el.id}
          onChange={(e) => idTaskHandler(e)}
        />
        <p>{index + 1}</p>
        <div className='tasks__item-text'>
          {editing === el.id ? (
            <input
              type="text"
              defaultValue={el.title}
              onBlur={(e) => taskEditHandler(el.id, e.target.value)}
            />
          ) : (
            <p>{el.title}</p>
          )}
        </div>
        <div className='tasks__btns'>
          <button onClick={() => dispatch(removeTasks([el.id]))}>Remove</button>
          <button onClick={() => setEditing(el.id)}>Edit</button>
        </div>

      </div>
    )
  )


  return (
    <div>
      <div className='tasks'>
        <h2>TO_DO list with Redux ( Async ) </h2>
        {loading ? <Loader/> : <div>{listElement}</div>}
        <input
          type="text"
          placeholder='Type your task here...'
          onChange={addTextToStore}
          value={text}
        />
        <button
          onClick={() => {
            if (text.trim()) {
              const newTask = {
                id: String(uuidv4()),
                title: text
              };
              dispatch(addTask(newTask));
              cleanInput();
            }
          }}>ADD TASK
        </button>
        <button
          onClick={() => {
            dispatch(removeTasks(selectedIds));
            setSelectedIds([]);
          }}> REMOVE TASK
        </button>
      </div>
    </div>
  );
};

export default ToDoAsyncRedux;


// class ToDoAsyncRedux extends Component {
//   state = {
//     text: '',
//     selectedIds: [],
//     editing: null
//   }
//
//   componentDidMount() {
//     this.props.dispatch(LoadedAction())
//   }
//
//   addTextToStore(even) {
//     this.setState({
//       text: even.target.value
//     })
//   }
//
//   idTaskHandler(e) {
//     const id = e.target.id;
//     if (e.target.checked) {
//       this.setState(prevState => ({
//         selectedIds: [...prevState.selectedIds, id]
//       }));
//     } else {
//       this.setState(prevState => ({
//         selectedIds: prevState.selectedIds.filter(selectedId => selectedId !== id)
//       }));
//     }
//   }
//
//   cleanInput() {
//     this.setState({text: ''})
//   }
//
//   taskEditHandler(id, title){
//     const updatedTask = {id, title}
//     this.props.dispatch(updateTask(updatedTask));
//     this.setState({editing: null})
//   }
//
//   render() {
//     const {tasks, loading} = this.props.todos
//     const {dispatch} = this.props
//
//     const listElement = tasks.map((el, index) => {
//       return (
//         <div className='tasks__item' key={el.id}>
//           <input
//             type='checkbox'
//             id={el.id}
//             onChange={(e) => this.idTaskHandler(e)}
//           />
//           <p>{index + 1}</p>
//           <div className='tasks__item-text'>
//             {this.state.editing === el.id ? (
//               <input
//                 type="text"
//                 defaultValue={el.title}
//                 onBlur={(e) => this.taskEditHandler(el.id, e.target.value)}
//               />
//             ) : (
//               <p>{el.title}</p>
//             )}
//
//           </div>
//           <div className='tasks__btns'>
//             <button
//             onClick={() => dispatch(removeTasks([el.id]))}
//             >Remove</button>
//             <button
//               onClick={() => {
//                 this.setState({ editing: el.id });
//               }}
//             >Edit</button>
//           </div>
//
//         </div>
//       );
//     })
//
//     return (
//       <div>
//         <div className='tasks'>
//           <h2>TO_DO list with Redux ( Async ) </h2>
//           {loading ? <Loader/> : <div>{listElement}</div>}
//             <input
//               type="text"
//               placeholder='Type your task here...'
//               onChange={(e) => this.addTextToStore(e)}
//               value={this.state.text}
//             />
//           <button
//             onClick={() => {
//               if (this.state.text.trim()) {
//                 const newTask = {
//                   id: String(uuidv4()),
//                   title: this.state.text
//                 };
//                 dispatch(addTask(newTask));
//                 this.cleanInput();
//               }
//             }}>ADD TASK
//           </button>
//           <button
//             onClick={() => {
//               dispatch(removeTasks(this.state.selectedIds))
//               this.setState({selectedIds: []});
//             }}> REMOVE TASK
//           </button>
//         </div>
//
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (store) => {
//   return {
//     todos: store.tasks,
//   }
//
// }
// export default connect(mapStateToProps)(ToDoAsyncRedux);