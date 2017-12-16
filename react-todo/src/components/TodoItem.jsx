import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TodoItemController from './TodoItemController';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

const TodoItem = ({ title, contactKey, completed, onCompleteItem, onDeleteItem }) => {
  return (
    <div 
      className={cx('item', `${completed === true ? 'is-done' : ''}`)}
    >
      <div className={cx('title')}> 
        {title}
      </div>
      {/*
      <div className={cx('description')}>
        {description}
      </div>
      */}
      <TodoItemController 
        contactKey={contactKey}
        onCompleteItem={onCompleteItem}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string, 
  description: PropTypes.string, 
  completed: PropTypes.bool,
};
TodoItem.defaultProps = {
  title: 'no title', 
  description: 'no description', 
  completed: false,
};

export default TodoItem;