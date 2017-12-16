import React, { Component } from 'react';
import update from 'react-addons-update';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import classNames from 'classnames/bind';
import styles from './App.css';

const cx = classNames.bind(styles);
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
      todos: [
        {
          title: '1',
          description: '11111',
          completed: false,
        },
        {
          title: '2',
          description: '222',
          completed: true,
        },
      ]
    };

    this.onInsertTodo = this.onInsertTodo.bind(this);
    this.onChangeKeyword = this.onChangeKeyword.bind(this); 
  }

  onChangeKeyword(text) {
    this.setState({
      keyword: text,
    });
  };

  onInsertTodo(title) {
    let newItem = update(this.state, {
      todos: {
        $push: [{'title': title, }]
      }
    });
    this.setState(newItem);
  };

  render() { 
    return (
      <div className={cx('App')}>
        <TodoInput 
          keyword={this.state.keyword}
          onInsertTodo={this.onInsertTodo}
          onChangeKeyword={this.onChangeKeyword}
        />
        <TodoList todos={this.state.todos} /> 
      </div>
    );
  }
}

export default App;
