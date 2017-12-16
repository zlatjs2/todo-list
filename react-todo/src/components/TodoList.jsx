import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TodoItem from './TodoItem';
import styles from './TodoList.scss';

const cx = classNames.bind(styles);
const TodoList = ({ todos, onCompleteItem, onDeleteItem }) => {
  return (
    <div className={cx('list')}>
      {todos.map((todo, idx) =>
        <TodoItem
          key={idx}
          contactKey={idx}
          title={todo.title} 
          description={todo.description}
          completed={todo.completed}        
          onCompleteItem={onCompleteItem}
          onDeleteItem={onDeleteItem}
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