import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdCreate, MdDelete } from 'react-icons/lib/md';

import styled from 'styled-components';

const ItemWrap = styled.div`
  position: relative;
  margin-top: 0.5rem;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  :first-child {
    margin-top: 0;
  }
`;

const Label = styled.label`
  position: relative;
  display: block;
  padding: 1rem;
  color: #343a40;
  &.is-completed {
    opacity: 0.2;
    text-decoration: line-through;
  }
`;

let Title = styled.strong`
  display: block;
`;

const Description = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #adb5bd;
`;

const CheckInput = styled.input`
  position: absolute;
  left: -9999px;
`;

const EditBox = styled.div`
  margin: 0 1rem 1rem;
  border: 1px solid #e9ecef;
`;

const InputItem = styled.div`
  padding: 0.5rem;
  :first-child {
    border-bottom: 1px solid #e9ecef;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 0.2rem 0;
  background-color: transparent;
`;

const Condition = styled.span`
  font-size: 0.7rem;
  color: #868e96;
  &.is-completed {
    color: #51cf66;
  }
`;

const ControlButtons = styled.div`
  text-align: right;
  padding: 0 1rem 1rem;
`;

const ControlButton = styled.button`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: #868e96;
  :first-child {
    margin-left: 0;
  }
`;
class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange(e){
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  onCheck() {
    const { id, checked } = this.props;
    this.props.onCheckedItem(id, checked);
  }

  handleClick(e) {
    const { id, onEditItem, onRemoveItem } = this.props;
    const { title, description } = this.state;
    let targetName = e.currentTarget.name;

    switch(targetName) {
      case 'editButton':  
        if(title !== '' && description !== '') {
          onEditItem(id, title, description);
        }

        break;

      case 'removeButton':
        onRemoveItem(id);
        break;
    }    
  }

  render() {
    const { id, title, description, checked } = this.props;

    return (
      <ItemWrap>
        <Label 
          htmlFor={id}
          className={checked && 'is-completed'}
        >
          <CheckInput 
            type="checkbox" 
            id={id}
            checked={checked} 
            onChange={this.onCheck.bind(this)}
          />
          <Title>
            {title}
          </Title>
          <Description>{description}</Description>
        </Label>
        {/* <EditBox>
          <InputItem>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              placeholder={title}
              onChange={this.handleChange.bind(this)}
            />
          </InputItem>
          <InputItem>
            <Input
              type="text"
              name="description"
              value={this.state.description}
              placeholder={description}
              onChange={this.handleChange.bind(this)}
            />
          </InputItem>
        </EditBox> */}
        <ControlButtons>
          <Condition className={checked && 'is-completed'}>
            {checked === true ? 'Completed' : 'Unfinished'}
          </Condition>
          <ControlButton 
            name="editButton"
            type="button"
            onClick={this.handleClick.bind(this)}
          >
            <MdCreate/>
          </ControlButton>
          <ControlButton 
            name="removeButton"
            type="button"
            onClick={this.handleClick.bind(this)}
          >
            <MdDelete/>
          </ControlButton>
        </ControlButtons>
        {/* <div>write 3time ago</div> */}
        
      </ItemWrap>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckedItem: PropTypes.func.isRequired,
};
TodoItem.defaultProps = {
  title: 'no title',
  description: 'no description',
  completed: false,
  checked: false,
};

export default TodoItem;