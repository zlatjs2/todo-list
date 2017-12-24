import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import TodoContainer from './containers/TodoContainer';
import FooterContainer from './containers/FooterContainer';
// import ModalContainer from './containers/ModalContainer';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <HeaderContainer/>
        <TodoContainer/>
        <FooterContainer/>
        {/* <ModalContainer/> */}
      </div>
    );
  }
}

export default App;
