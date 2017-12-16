import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdDone, MdDelete } from 'react-icons/lib/md';
import classNames from 'classnames/bind';
import styles from './TodoItemController.scss';

const cx = classNames.bind(styles);

class TodoItemController extends Component {
  constructor(props) {
    super(props);

    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onCompleteItem() {
    let key = this.props.contactKey;
    this.props.onCompleteItem(key);
  }
  
  onDeleteItem() {
    let key = this.props.contactKey;
    this.props.onDeleteItem(key);
  }

  render() {
    return(
      <div className={cx('controller')}>
        <button 
          type="button"
          onClick={this.onCompleteItem}
          className={cx('control-button', 'done-button')}
        >
          <MdDone />
        </button>
        <button 
          type="button"
          onClick={this.onDeleteItem}
          className={cx('control-button', 'delete-button')}
        >
          <MdDelete />
        </button>
      </div>
    );
  }
}

TodoItemController.propTypes = {
  onCompleteItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}

TodoItemController.defaultProps = {
  onCompleteItem: () => console.warn('is not onCompleteItem'),
  onDeleteItem: () => console.warn('is not onDeleteItem'),
}

export default TodoItemController;