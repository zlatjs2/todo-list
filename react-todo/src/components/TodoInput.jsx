import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(e) {
    let text = e.target.value;
    this.props.onChangeKeyword(text);
  };

  handleClick() {
    this.props.onInsertTodo(this.props.keyword);
  };
  
  render() {
    const { keyword } = this.props;
    return (
      <div>
        <input 
          type="text" 
          value={keyword}
          onChange={this.handleChange}
        />
        <button 
          type="button" 
          onClick={this.handleClick}
        >add</button>
      </div>
    );
  }
}

export default TodoInput;