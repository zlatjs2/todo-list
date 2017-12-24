import React, { Component } from 'react';
// import { MdCheck, MdCreate, MdDelete } from 'react-icons/lib/md';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  position: relative;
  padding: 0.5rem 1rem;
  background-color: #22b8cf;
`;
const Title = styled.h1`
  font-size: 1.4rem;
  color: #fff;
`;
const CreateButton = styled.div`
  position: absolute; 
  top: 50%;
  right: 1rem;
  height: 30px;
  margin-top: -15px;
`;
const Button = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  
  ::after,
  ::before {
    content: '';
    position: absolute;
    background-color: #22b8cf;
  }

  ::after {
    left: 50%;
    top: 5px;
    width: 1px;
    height: 20px;
  }
  ::before {
    left: 5px;
    top: 50%;
    width: 20px;
    height: 1px;
  }
`;

class Header extends Component {

  handleClick() {
    let checked = this.props.modal;
    this.props.onToggleModal(checked);  
  }

  render() {
    return (
      <HeaderWrap>
        <Title>LIST OF TODOS</Title>
        <CreateButton>
          <Button
            onClick={this.handleClick.bind(this)}
          />
        </CreateButton>
      </HeaderWrap>
    );
  }
}

export default Header;