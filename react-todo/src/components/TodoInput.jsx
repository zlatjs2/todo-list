import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TodoInput.scss';
const cx = classNames.bind(styles);
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
      <div className={cx('form')}>
        <div className={cx('keyword')}>
          <input 
            className={cx('input')}
            type="text" 
            value={keyword}
            placeholder="Title..."
            onChange={this.handleChange}
          />
          <button   
            className={cx('create-button')}
            type="button" 
            onClick={this.handleClick}
          >추가</button>
        </div>
      </div>
    );
  }
}

export default TodoInput;