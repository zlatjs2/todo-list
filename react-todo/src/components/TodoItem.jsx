import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

const TodoItem = ({ title, description, completed }) => {
  return (
    <div className={cx('todo-item')}>
      <div className={cx('todo-item__title')}> 
        {title}
      </div>
      <div className={cx('todo-item__description')}>
        {description}
      </div>
    </div>
  );
};

TodoItem.PropTypes = {
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