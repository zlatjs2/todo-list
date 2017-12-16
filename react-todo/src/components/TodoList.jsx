import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TodoItem from './TodoItem';
import styles from './TodoList.scss';

const cx = classNames.bind(styles);

const TodoList = ({ todos }) => {
  return (
    <div className={cx('todo-list')}>
      {todos.map((todo, idx) =>
          <TodoItem
            title={todo.title} 
            description={todo.description}
            completed={todo.completed}
            key={idx}
          />
        )}
    </div>  
  );
};

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
};
TodoList.defaultProps = {
  todos: [],
};

export default TodoList;