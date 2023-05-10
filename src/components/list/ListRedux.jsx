import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {inputAction, listAction} from "./listAction";


const ListRedux = () => {

  const dispatch = useDispatch()
  const listArr = useSelector(state => state.listArr)
  const inputValue = useSelector(state => state.inputValue)

  const inputOnChangeHandler = (e) => {
    dispatch(inputAction(e.target.value))
  }

  const handleButtonClick = () => {
    dispatch(listAction(inputValue))
    dispatch(inputAction(''))
  };


  const list = listArr.map((el, i) => {
    return <p key={el}>{i} - {el}</p>
  })

  return (
    <div className='list-one'>

      <h1>List</h1>
      {list}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => inputOnChangeHandler}
      />
      <button onClick={handleButtonClick}>ADD TO LIST</button>
    </div>
  );
};

export default ListRedux;

// class ListRedux extends Component {
//   inputOnChangeHandler = (e) => {
//     this.props.setInputValue(e.target.value)
//   }
//
//   handleButtonClick = () => {
//     this.props.addItem(this.props.inputValue);
//     this.props.setInputValue('');
//
//   };
//
//   render() {
//     const {listArr} = this.props
//
//     const list = listArr.map((el, i)=> {
//       return <p key={el}>{i} - {el}</p>
//
//     })
//
//     return (
//       <div className='list-one'>
//         <h1>List</h1>
//         {list}
//         <input
//           type="text"
//           value={this.props.inputValue}
//           onChange={(event) => this.inputOnChangeHandler(event)}
//         />
//         <button onClick={this.handleButtonClick}>ADD TO LIST</button>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     listArr: state.listArr,
//     inputValue: state.inputValue,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setInputValue: (value) => dispatch(inputAction(value)),
//     addItem: (item) => dispatch(listAction(item)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ListRedux);