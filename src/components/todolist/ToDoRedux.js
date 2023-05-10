import React, {Component, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {deleteTaskActionCreator, taskActionCreator} from "./todoActions";


const ToDoRedux = () => {

  const [text, setText] = useState('')
  const [selectedIds, setSelectedIds] = useState([])

  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  const addTextToStore = (even) => {
    setText(even.target.value)
  }

  const idTaskHandler = (e) => {
    const id = e.target.id;
    if (e.target.checked) {
      setSelectedIds(prevSelectedIds => [...prevSelectedIds, id])

    } else {
      setSelectedIds(prevSelectedIds => prevSelectedIds.filter(selectedId => selectedId !== id))
    }
  }

  const cleanInput = () => {
    setText('')
  }

    const listElement = list.map((el, index) => {
      return <p key={el.id}>{index} - {el.text}
        <input
        type='checkbox'
        id={el.id}
        onChange={(e) => idTaskHandler(e)}
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
              onChange={(e) => addTextToStore(e)}
              value={text}
            />
          </div>
          <button
            onClick={() => {
              dispatch(taskActionCreator(text))
              cleanInput()
            }}>ADD TASK
          </button>
          <button
          onClick={() => {
            dispatch(deleteTaskActionCreator(selectedIds))
            setSelectedIds([])
          }}> REMOVE TASK</button>
        </div>
      </div>
  );
};

export default ToDoRedux;


// class ToDoRedux extends Component {
//   state = {
//     text: '',
//     selectedIds: []
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
//   render() {
//     const {list, dispatch} = this.props
//     const listElement = list.map((el, index) => {
//       return <p key={el.id}>{index} - {el.text}
//         <input
//         type='checkbox'
//         id={el.id}
//         onChange={(e) => this.idTaskHandler(e)}
//       /></p>
//     })
//
//     return (
//       <div>
//
//         <div className='list-one'>
//           <h2>TO-DO list with Redux</h2>
//           {listElement}
//           <div>
//             <input
//               type="text"
//               onChange={(e) => this.addTextToStore(e)}
//               value={this.state.text}
//             />
//           </div>
//           <button
//             onClick={() => {
//               dispatch(taskActionCreator(this.state.text))
//               this.cleanInput()
//             }}>ADD TASK
//           </button>
//           <button
//           onClick={() => {
//             dispatch(deleteTaskActionCreator(this.state.selectedIds))
//             this.setState({ selectedIds: [] });
//           }}> REMOVE TASK</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (store) => {
//   return {
//     list: store.list,
//   }
// }
// export default connect(mapStateToProps)(ToDoRedux);