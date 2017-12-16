import React, { Component } from 'react';
import update from 'react-addons-update';

import Container from '../components/Container';
import Header from '../components/Header';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
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
    this.onCompleteItem = this.onCompleteItem.bind(this); 
    this.onDeleteItem = this.onDeleteItem.bind(this); 
  }

  onChangeKeyword(text) {
    this.setState({
      keyword: text,
    });
  };

  onInsertTodo(title) {
    if(title === '') {
      console.log('error');
    } else {
      let newItem = update(this.state, {
        todos: {
          $push: [{ 'title': title, 'completed': false }]
        }
      });

      this.setState(newItem);
    }
  };

  onCompleteItem(key) {
    this.setState({
      todos: update(this.state.todos, {
        [key]: {
          completed: { $set: !this.state.todos[key].completed }
        }
      })
    });   
  }
  
  onDeleteItem(key) {
    this.setState({
      todos: update(this.state.todos, {
        $splice: [[key, 1]]
      })
    });
  }

  render() { 
    return (
      <div>
        <Header />
        <TodoInput 
          keyword={this.state.keyword}
          onInsertTodo={this.onInsertTodo}
          onChangeKeyword={this.onChangeKeyword}
        />
        <Container>
          <TodoList 
            todos={this.state.todos} 
            onCompleteItem={this.onCompleteItem}
            onDeleteItem={this.onDeleteItem}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
