import React, {Component} from 'react';
import {connect} from "react-redux";
import {inputAction, listAction} from "./listAction";


class ListRedux extends Component {
  inputOnChangeHandler = (e) => {
    this.props.setInputValue(e.target.value)
  }

  handleButtonClick = () => {
    this.props.addItem(this.props.inputValue);
    this.props.setInputValue('');

  };

  render() {
    const {listArr} = this.props

    const list = listArr.map((el, i)=> {
      return <p key={el}>{i} - {el}</p>

    })

    return (
      <div className='list-one'>
        <h1>List</h1>
        {list}
        <input
          type="text"
          value={this.props.inputValue}
          onChange={(event) => this.inputOnChangeHandler(event)}
        />
        <button onClick={this.handleButtonClick}>ADD TO LIST</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listArr: state.listArr, // здесь больше ничего не нужно изменять
    inputValue: state.inputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInputValue: (value) => dispatch(inputAction(value)),
    addItem: (item) => dispatch(listAction(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListRedux);